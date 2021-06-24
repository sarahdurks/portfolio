

import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {AccountCircle } from '@material-ui/icons';
import emailjs from 'emailjs-com';
import Message from './Message';
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  contactContainer: {
      display: 'flex',
      height: "100vh",
      background: '#4A154B',
      justifyContent: "center",
  },
  heading: {
      color: "white",
      fontFamily: "Roboto",
      fontWeight: 600,
      textAlign: "center",
      marginBottom: "1rem",
      fontSize: '1.8rem',
      '@media (max-width:600px)': {
          fontSize: '1.3rem',
      },
  },
  heading2: {
      color: "#DBC8FF",
      textAlign: "center",
      lineHeight: 1.15,
      fontWeight: 300,
      
      fontFamily: "Roboto",
      marginBottom: "1rem",
      display: 'flex',
      alignItems: "baseline",
      flexWrap: 'wrap',
      '@media (max-width:600px)': {
          fontSize: '1.1rem',
      },
  },
  btn: {
      color: "white",
      fontSize: '1rem',
      fontFamily: "Roboto",
      fontWeight: 300

  },
  icon: {
      margin: 0,
      paddingBottom: 5,
      alignSelf: 'baseline',
  },
  form: {
      paddingTop: '15vh',
      alignSelf: 'baseline',
      maxWidth: 620,
      '@media (max-width:600px)': {
          width: 320,
          marginTop: '30vh',
          padding: 4,
      },

      '@media (min-width:600px)': {
          paddingTop: '20vh',
          position: "absolute",
          maxWidth: 650,
      },
  },
  input: {
      color: "pink",
      
      },

  button: {
      marginTop: "1.5rem",
      color: "#DBC8FF",
      border: 'white'
  },
  field: {
      margin: "1.1rem 0rem",
  },

}));

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
        <TextField
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