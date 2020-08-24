// action-types
import {
    ADD_NOTIFICATION_INIT,
    ADD_NOTIFICATION,
    DELETE_NOTIFICATIONS_INIT,
    DELETE_NOTIFICATIONS,
} from '../action-types';


export const addNotificationInit = (data) => {
    return {
        type: ADD_NOTIFICATION_INIT,
        payload: {data}
    }
};
export const addNotification = (data) => {
    return {
        type: ADD_NOTIFICATION,
        payload: {data}
    }
};

export const deleteNotificationsInit = () => {
    return {
        type: DELETE_NOTIFICATIONS_INIT,
    }
};
export const deleteNotifications = () => {
    return {
        type: DELETE_NOTIFICATIONS,
    }
};