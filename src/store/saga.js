// saga effects
import { all } from 'redux-saga/effects';

// sagas
import { todoSaga } from './todo/saga';
import { notificationSaga } from './notifications/saga';


export function* watchSaga() {
    yield all([
        todoSaga(),
        notificationSaga(),
    ])
}