import React from 'react';
import { useSelector } from 'react-redux';

// components
import {
    CreateList,
    ListsControls,
    Notifications,
} from '../../components';

// classes
import classes from './TodoList.module.scss';


const TodoList = () => {
    const {todoLists} = useSelector((state) => state.todoReducer);
    const {notifications} = useSelector((state) => state.notificationReducer);

    return (
        <main className={classes.mainContainer}>
            <h2 className={classes.mainContainer__title}>To Do List</h2>
            <CreateList />
            <ListsControls todoLists={todoLists} />
            <Notifications notifications={notifications} />
        </main>
    )
}

export { TodoList }