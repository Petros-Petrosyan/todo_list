import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// material
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Badge from '@material-ui/core/Badge';

// actions
import {
    addNotificationInit,
    deleteNotificationsInit,
} from '../../store/notifications/action';

// components
import { Popup } from '..';
import { List } from '../ListsControl';

// classes
import classes from './Notifications.module.scss';


const Notifications = (props) => {
    const {notifications} = props;
    const dispatch = useDispatch();

    const addNotificationTimeToTime = () => {
        dispatch(addNotificationInit());
        setTimeout(addNotificationTimeToTime, 10000);
    }

    useEffect(() => {
        setTimeout(addNotificationTimeToTime, 10000);
    }, []);


    const viewNotifications = notifications.map((notification, i) => {
        return (
            <List key={`${notification.date}${i}`}
                  title={notification.title}
                  info={notification.info}
                  date={notification.date}
            />
        )
    });

    const deleteNotifications = () => {
        dispatch(deleteNotificationsInit());
    }

    return (
        <section className={classes.notContainer}>
            <div className={classes.notContainer__icon}>
                <Popup
                    title='Notifications'
                    content={viewNotifications}
                    event={deleteNotifications}
                >
                    <Badge badgeContent={notifications.length} color="primary">
                        <NotificationsNoneIcon fontSize='large' />
                    </Badge>
                </Popup>
            </div>
        </section>
    )
}

export { Notifications }