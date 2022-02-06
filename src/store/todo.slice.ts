import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ITodo} from "../interfaces";

interface ITodoStore {
    todoList: ITodo[],
    status: boolean,
    todoCounter: number,
    todoComplete: number,
    id: number | null,
}

const initialState: ITodoStore = {
    todoList: [],
    status: false,
    todoCounter: 0,
    todoComplete: 0,
    id: null,
}

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTODO: (state, action: PayloadAction<{ title: ITodo }>) => {
            state.todoList.push({id: new Date().getTime(), title: action.payload.title.title, status: false})
            state.todoCounter += 1
        },
        deleteTODO: (state, action: PayloadAction<{ id: number | undefined }>) => {
            const todoSel = state.todoList.find(value => value.id === action.payload.id);
            state.todoComplete -= todoSel?.status ? 1 : 0
            state.todoList = state.todoList.filter(item => (item.id !== action.payload.id))
            state.todoCounter -= 1

        },
        chooseTODO: (state, action: PayloadAction<{ id: number | undefined }>) => {
            const todoSelected: any = state.todoList.find(value => value.id === action.payload.id);
            todoSelected.status = !todoSelected.status
            state.todoComplete += todoSelected.status ? 1 : -1
        }
    }
})

const todoReducer = todoSlice.reducer

export const {addTODO, deleteTODO, chooseTODO} = todoSlice.actions
export default todoReducer