// redux
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

// Reducers
import { todoReducer } from './todo/reducer';
import { notificationReducer } from './notifications/reducer';

// sagas
import createSagaMiddleware from 'redux-saga';
import { watchSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    todoReducer,
    notificationReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchSaga);