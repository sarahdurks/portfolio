

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
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
const useStyles = makeStyles((theme) => ({

  contact: {
      display: 'flex',
      height: "90vh",
      marginBottom: `5vh`,
      justifyContent: "center",
  },

  head:
    { marginTop: `15vh`,
    fontFamily: `Poppins`,
    color: `#5bb381`,
    fontSize: `2rem`,
    weight: 900,
    justifyContent: `center`
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
      "&:hover": {
        color: `#5bb381`
    },


  },
  icon: {
   

      alignSelf: 'center',
      color: `black`
  },
  form: {
      paddingTop: '15vh',
      marginTop: `2vh`,
      alignSelf: `center`,
      paddingBottom: `3rem`,
      color: `black`,
      maxWidth: 620,
      '@media (max-width:600px)': {
          width: 320,
          marginTop: '10vh'

      },

      '@media (min-width:600px)': {
          paddingTop: '10vh',
          position: "absolute",
          maxWidth: 650,
      },
  },
  input: {
      color: "black",
      border: `white`,
      paddingBottom: `3rem`
      
      },
  field: {
    fontFamily: `Poppins`,
      color: `black`,
      paddingBottom: `3rem`,
      marginBottom: `6rem`,
      marginTop: `6rem`,

  },
  margin: {
    color: `white`,
    marginBottom: `2rem`,
    fontFamily: `Poppins`
  },
  formtext: 
  {
    color: `black`,
    fontFamily: `Poppins`,
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

    <Typography className={classes.head}>GET IN TOUCH</Typography>
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
                <AlternateEmailIcon  className={classes.icon}/>
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