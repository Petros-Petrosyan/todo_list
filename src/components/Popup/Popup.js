import React, { useState } from 'react';

// material
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
        margin: 0,
        minWidth: 300+'px',
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


const Popup = (props) => {
    const {
        children,
        title,
        content,
        event,
    } = props;

    const [open, setOpen] = useState(false);

    const openDialog = () => setOpen(true);
    const closeDialog = () => setOpen(false);
    const closeAndHandelEvent = () => {
        setOpen(false);
        event();
    }

    return (
        <div>
            <div onClick={openDialog}>{children}</div>

            <Dialog onClose={closeDialog} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={closeDialog}>
                    {title}
                </DialogTitle>

                <DialogContent dividers>
                    <Typography gutterBottom component={'span'}> {content} </Typography>
                </DialogContent>

                <DialogActions>
                    <Button autoFocus onClick={closeAndHandelEvent} color="secondary">
                        Delete notifications
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


export { Popup }