

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {AccountCircle, ThumbsUpAltIcon } from '@material-ui/icons';
import emailjs from 'emailjs-com';
import ContactMsg from './ContactMsg';


const useStyles = makeStyles((theme) => ({
    container: {
        width:  `100vw`,
        height: `100vh`,
    }
}))


    const Contact = () => {
        const [open, setOpen] = useState(false);
        const [alertMsg, setAlertMsg] = useState('');
        const [severity, setSeverity] = useState('');
        const classes = useStyles();

        function sendEmail(e) {
            e.preventDefault();
            emailjs.sendForm(`service_55ordmk`, 'template_2q20s7z', e.target, `user_GcH4nziNEAWYKlSxODfHx`)
                .then((result) => {
                    if (result.status === 200) {
                        setOpen(true)
                        setAlertMsg('Your message worked!');
                        setSeverity('success')
                    }
                    else {
                        setOpen(true)
                        setAlertMsg('Something went wrong. Try Again?');
                        setSeverity('warning')
                    }
                }, (error) => {
                    console.log(error);
                    setOpen(true)
                    setAlertMsg(error.text);
                    setSeverity('error')
                });
            e.target.reset()
        }

        return (

            
        <Box component="div" className={classes.contactContainer}>
  <Grid container justify="center">
    <Box component="form" className={classes.form} onSubmit={sendEmail}>
      <Grid>
        <TextField
          className={classes.margin}
          id="name"
          label="Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid>
        <TextField
          className={classes.margin}
          id="email"
          label="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid>
        <InputField
          fullWidth={true}
          label="Send me a message!"
          name="message"
          required
          multiline
          rows={10}
          inputProps={{ className: classes.input }}
        />
      </Grid>
      <Grid>
        <Button
          variant="outlined"
          endIcon={<ThumbUpAltIcon />}
          type="submit"
          className={classes.button}
        >
          Submit
        </Button>
      </Grid>
    </Box>
    <Message
                    alertMsg={alertMsg}
                    setOpen={setOpen}
                    severity={severity}
                    open={open} />
    </Grid>
</Box>

        );
    };     


    export default Contact