import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { concatDate } from '../../utilities/date';
import toast from 'cogo-toast';

// actions
import { addTodoInit } from '../../store/todo/action';

// material
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    TimePicker,
    DatePicker,
} from "@material-ui/pickers";

// classes
import classes from './CreateList.module.scss';


const CreateList = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [info, setInfo] = useState('');
    const [selectedDate, handleDateChange] = useState(new Date());
    const [selectedTime, handleTimeChange] = useState(new Date());

    const changeTodo = (event) => {
        const {target: {name, value}} = event;
        switch (name) {
            case 'title': return setTitle(value)
            case 'info': return setInfo(value)
            default: return null
        }
    }

    const createTodo = () => {
        const isValid = title.trim().length && info.trim().length;
        if (isValid) {
            const data = {
                date: concatDate(selectedDate, selectedTime),
                title,
                info,
            }
            dispatch(addTodoInit(data));
            setTitle('');
            setInfo('');
        } else {
            toast.error('Title and Info is required', {position: 'bottom-right'});
        }
    }

    return (
        <section className={classes.formContainer}>
            <Card>
                <div className={classes.formContainer__fieldsContainer}>
                    <div className={classes.formContainer__fieldsContainer__field}>
                        <TextField
                            name='title'
                            label="Title *"
                            value={title}
                            onChange={changeTodo}
                        />
                    </div>
                    <div className={classes.formContainer__fieldsContainer__field}>
                        <TextField
                            name='info'
                            label="Info *"
                            value={info}
                            onChange={changeTodo}
                        />
                    </div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <div className={classes.formContainer__fieldsContainer__field}>
                            <DatePicker
                                label="Date"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                animateYearScrolling
                            />
                        </div>
                        <div className={classes.formContainer__fieldsContainer__field}>
                            <TimePicker
                                autoOk label="Hours"
                                value={selectedTime}
                                onChange={handleTimeChange}
                            />
                        </div>
                    </MuiPickersUtilsProvider>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={createTodo}
                    >
                        Primary
                    </Button>
                </div>
            </Card>
        </section>
    )
}

export { CreateList }