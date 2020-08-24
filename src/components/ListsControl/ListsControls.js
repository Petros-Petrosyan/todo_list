import React from 'react';
import { useDispatch } from 'react-redux';

// material
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

// actions
import { deleteTodoInit } from '../../store/todo/action';

// components
import { List } from '.';

// classes
import classes from './ListsControle.module.scss';


const ListsControls = (props) => {
    const dispatch = useDispatch();
    const {todoLists} = props;

    const removeList = (index) => {
        dispatch(deleteTodoInit(index));
    }

    const viewLists = todoLists.map((list, i) => {
        const {title, info, date} = list;
        return (
            <div className={classes.listContainer__listPanl} key={`${title}${i}`}>
                <List title={title} info={info} date={date} />
                <div className={classes.listContainer__listPanl__buttons}>
                    <div
                        onClick={() => removeList(i)}
                        className={classes.listContainer__listPanl__buttons__delete}
                    >
                        <DeleteOutlineIcon />
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section className={classes.listContainer}>
            {viewLists}
        </section>
    )
}

export { ListsControls }