import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {addTODO} from '../../store';
import css from './form.module.css';
import {ITodo} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";

const Form: FC = () => {
    const {register, handleSubmit, reset,} = useForm<ITodo>();
    const dispatch = useAppDispatch();
    const {todoCounter, todoComplete} = useAppSelector(state => state.todoReducer);

    const submit: SubmitHandler<ITodo> = (title) => {
        dispatch(addTODO({title}))
        reset()
    }

    return (
        <div>
            <div className={css.todoResult}>
                <div><h2>All: {todoCounter}</h2></div>
                <div><h2>Completed: {todoComplete}</h2></div>
            </div>
            <hr/>
            <form onSubmit={handleSubmit(submit)}>
                <label><input type="text" placeholder={'Todo title'} {...register('title')}/></label>
                <button>Submit</button>
            </form>


        </div>
    );
};

export {Form};