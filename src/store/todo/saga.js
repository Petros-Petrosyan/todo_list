import toast from 'cogo-toast';
import { select } from 'redux-saga/effects';
import { setDataInStorage } from '../../utilities/storage';

// saga effects
import {
    put,
    takeEvery,
    all,
} from 'redux-saga/effects';

// action-types
import {
    ADD_TODO_INIT,
    DELETE_TODO_INIT,
} from '../action-types';

// actions
import {
    addTodo,
    deleteTodo
} from './action';


function* addList(action) {
    try {
        const {payload: {data}} = action;
        yield put(addTodo(data));
        const state = yield select();
        const {todoReducer: {todoLists}} = state;
        setDataInStorage('lists', todoLists);
        toast.success('ToDo successfully added', {position: 'bottom-right'});
    } catch (err) {
        toast.error(err.message, {position: 'bottom-right'});
    }
};
function* deleteList(action) {
    try {
        const {payload: {index}} = action;
        yield put(deleteTodo(index));
        const state = yield select();
        const {todoReducer: {todoLists}} = state;
        setDataInStorage('lists', todoLists);
        toast.success('ToDo successfully deleted', {position: 'bottom-right'});
    } catch (err) {
        toast.error(err.message, {position: 'bottom-right'});
    }
};


export function* todoSaga() {
    yield all([
        takeEvery(ADD_TODO_INIT, addList),
        takeEvery(DELETE_TODO_INIT, deleteList),
    ]);
}