import React from 'react';
import {
    formatDate,
    formatTime,
} from '../../../utilities/date';

// material
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Accordion from '@material-ui/core/Accordion';

// classes
import classes from './List.module.scss';


const List = (props) => {
    const {title, info, date} = props;
    const dey = formatDate(date);
    const time = formatTime(date);

    return (
        <div className={classes.list}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                        <span>{title}</span>
                        <span className={classes.right}>{dey} {time}</span>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>{info}</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export { List }