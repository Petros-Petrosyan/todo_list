// action-types
import {
    ADD_TODO_INIT,
    ADD_TODO,
    DELETE_TODO_INIT,
    DELETE_TODO,
} from '../action-types';


export const addTodoInit = (data) => {
    return {
        type: ADD_TODO_INIT,
        payload: {data}
    }
};
export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: {data}
    }
};

export const deleteTodoInit = (index) => {
    return {
        type: DELETE_TODO_INIT,
        payload: {index}
    }
};
export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        payload: {index}
    }
};