import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  
const Message = ({ alertMsg, open, setOpen, severity }) => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Snackbar open={open} onClose={() => setOpen(false)} className={classes.alertbox}>
                <Alert onClose={() => setOpen(false)} severity={severity} className={classes.alertbox}>
                    {alertMsg}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Message
