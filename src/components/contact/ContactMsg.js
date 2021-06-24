import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
//https://material-ui.com/api/alert/
const useStyles = makeStyles((theme) => ({
  
    alertmessage: {
        width: '50vw',
        background: 'purple',
        color: '#white',
        font: 'Poppins'
    }
}));

function Alert(props) {
    return <MuiAlert  variant="filled" {...props} />;
}

const Message = ({ alertMsg, open, setOpen, severity }) => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Snackbar open={open} onClose={() => setOpen(false)} className={classes.alertmessage}>
                <Alert onClose={() => setOpen(false)} severity={severity} className={classes.alertmessage}>
                    {alertMsg}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Message