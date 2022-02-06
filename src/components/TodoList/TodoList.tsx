import React, {FC} from 'react';

import {Todo} from "../Todo/Todo";
import {useAppSelector} from "../../hooks";

const TodoList: FC = () => {

    const {todoList} = useAppSelector(state => state.todoReducer);

    return (
        <div>
            <h2>TODOLIST</h2>
            {todoList.map(item => <Todo key={item.id} item={item}/>)}
        </div>
    );
};

export {TodoList};