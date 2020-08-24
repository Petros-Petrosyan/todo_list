import produce from 'immer';
import { getDataFromStorage } from '../../utilities/storage';

// action-types
import {
    ADD_NOTIFICATION,
    DELETE_NOTIFICATIONS,
} from '../action-types';


const initialState = {
    notifications: getDataFromStorage('notifications') || [],
};


const addNotification = (state, payload) => {
    const {data} = payload;
    return produce(state, draft => {
        draft.notifications.push(data);
    });
};
const deleteNotifications = (state) => {
    return produce(state, draft => {
        draft.notifications = [];
    });
}

const notificationReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_NOTIFICATION: return addNotification(state, payload)
        case DELETE_NOTIFICATIONS: return deleteNotifications(state)

        default: return state;
    }
};


export { notificationReducer };