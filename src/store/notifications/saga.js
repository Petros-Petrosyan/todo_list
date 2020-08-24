import { select } from 'redux-saga/effects';
import { isPassedDate } from '../../utilities/date';
import toast from 'cogo-toast';

// saga effects
import {
    put,
    takeEvery,
    all,
} from 'redux-saga/effects';

// action-types
import {
    ADD_NOTIFICATION_INIT,
    DELETE_NOTIFICATIONS_INIT,
} from '../action-types';

// actions
import { deleteTodoInit } from '../todo/action';
import {
    addNotification,
    deleteNotifications
} from '../notifications/action';
import {setDataInStorage} from "../../utilities/storage";


function* addListInNotifications() {
    try {
        const state = yield select();
        const {
            todoReducer: {todoLists},
            notificationReducer: {notifications}
        } = state;

        for (let i = 0; i < todoLists.length; ++i) {
            const date = todoLists[i].date;
            if (isPassedDate(date)) {
                yield put(deleteTodoInit(i));
                yield put(addNotification(todoLists[i]));
                const _notifications = [...notifications];
                _notifications.push(todoLists[i]);
                setDataInStorage('notifications', _notifications);
                toast.success('Notification added', {position: 'bottom-right'});
            }
        }

    } catch (err) {
        toast.error(err.message, {position: 'bottom-right'});
    }
};

function *deleteNotificationsList() {
    try {
        yield put(deleteNotifications());
        setDataInStorage('notifications', []);
        toast.success('Notifications deleted', {position: 'bottom-right'});
    } catch (err) {
        toast.error(err.message, {position: 'bottom-right'});
    }
}


export function* notificationSaga() {
    yield all([
        takeEvery(ADD_NOTIFICATION_INIT, addListInNotifications),
        takeEvery(DELETE_NOTIFICATIONS_INIT, deleteNotificationsList),
    ]);
}