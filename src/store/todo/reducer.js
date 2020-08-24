import produce from 'immer';
import { getDataFromStorage } from '../../utilities/storage';

// action-types
import {
    ADD_TODO,
    DELETE_TODO,
} from '../action-types';


const initialState = {
    todoLists: getDataFromStorage('lists') || [],
};


const addTodo = (state, payload) => {
    const {data} = payload;
    return produce(state, draft => {
        draft.todoLists.push(data);
    });
};
const deleteTodo = (state, payload) => {
    const {index} = payload;
    return produce(state, draft => {
        draft.todoLists.splice(index, 1);
    });
};


const todoReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_TODO: return addTodo(state, payload)
        case DELETE_TODO: return deleteTodo(state, payload)

        default: return state;
    }
};


export { todoReducer };