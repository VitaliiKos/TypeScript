import {combineReducers, configureStore} from "@reduxjs/toolkit";

import todoReducer from "./todo.slice";


const rootReducer = combineReducers({
    todoReducer
})

export const mainStore = () => configureStore({
    reducer:rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof mainStore>
export type AppDispatch = AppStore["dispatch"]