import React, {FC} from 'react';

import {Form, TodoList} from "./components";
import css from './App.module.css';

const App: FC = () => {
    return (
        <div className={css.App}>
            <Form/>
            <TodoList/>
        </div>
    );
};

export default App;