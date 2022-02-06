import React, {FC} from 'react';
import {useForm} from "react-hook-form";

import {chooseTODO, deleteTODO} from '../../store';
import css from './todo.module.css';
import {ITodo} from "../../interfaces";
import {useAppDispatch} from "../../hooks";

const Todo: FC<{ item: ITodo }> = ({item}) => {

    const {id, title, status} = item;
    const {register, handleSubmit} = useForm();

    const dispatch = useAppDispatch();

    const submit = () => {
        dispatch(chooseTODO({id}))
    }

    return (
        <div>
            <form onInput={handleSubmit(submit)}>
                <div className={css.todoList}>
                    <div><input type="checkbox" {...register('checkTodo')}/></div>
                    <div className={status ? css.check : ''}><h3>{title}</h3></div>
                    <div className={css.checkButton}>
                        <button onClick={() => dispatch(deleteTODO({id}))}>Delete</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export {Todo};