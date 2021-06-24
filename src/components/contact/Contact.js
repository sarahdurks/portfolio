

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
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({

  contact: {
      display: 'flex',
      height: "100vh",

      justifyContent: "center",
  },
  heading: {
  marginTop: '15vh',
      color: "white",
      fontFamily: "Poppins",
      fontWeight: 600,
      textAlign: "center",
      marginBottom: "1rem",
      fontSize: '1.8rem',
      '@media (max-width:600px)': {
          fontSize: '1.3rem',
      },
  },
  heading2: {
      color: `white`,
      textAlign: "center",
      lineHeight: 1.15,
      fontWeight: 300,
      margin: `2vh`,
      fontSize: `1.5rem`,
      fontFamily: "Poppins",
      marginBottom: "1rem",
      display: 'flex',
      alignItems: "baseline",
      flexWrap: 'wrap'
  },
  button: {
      color: "white",
      background: `orange`,
      fontSize: '1.5rem',
      margin: `2vh`,
      fontFamily: "Poppins",
      fontWeight: 400,


  },
  icon: {
   

      alignSelf: 'center',
      color: `pink`
  },
  form: {
      paddingTop: '15vh',
      marginTop: `2vh`,
      alignSelf: `center`,
      border: `pink`,
      paddingBottom: `3rem`,
      color: `pink`,
      maxWidth: 620,
      '@media (max-width:600px)': {
          width: 320,
          marginTop: '30vh',
          padding: 1,
      },

      '@media (min-width:600px)': {
          paddingTop: '20vh',
          position: "absolute",
          maxWidth: 650,
      },
  },
  input: {
      color: "white",
      border: `white`,
      paddingBottom: `3rem`
      
      },
  field: {

      color: `white`,
      paddingBottom: `3rem`,
      marginBottom: `6rem`,
      marginTop: `6rem`,

  },
  margin: {
    color: `white`,
    marginBottom: `2rem`,
  },
  formtext: 
  {
    color: `white`
  }

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
             
                    setOpen(true)
                    setAlertMsg(error.text);
                    setSeverity('error')
                });
            e.target.reset()
        }

        return (

            
        <Box component="div" className={classes.contact}>
  <Grid container justify="center">
    <Box component="form" className={classes.form} onSubmit={sendEmail}>
      <Grid>

    <Typography>Get in touch</Typography>
        <TextField
          className={classes.margin}
          id="name"
          label="Name"
          InputProps={{
            startAdornment: (
              <InputAdornment  position="start">
                <AccountCircle className={classes.icon}/>
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
              <InputAdornment  position="start">
                <AccountCircle className={classes.icon}/>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid>
        <TextField className="formtext"
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
          Let's connect!
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