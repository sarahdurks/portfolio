

import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { LinkedIn, GitHub, Language } from '@material-ui/icons';
import contact from '../../utils/contact';

const useStyles = makeStyles(() => ({
  footer: {
    display: 'flex',
    position: "fixed",
    alignContent: `center`,
    zindex: '1',
    bottom: '0',
    color: `#4A154B`,
    '@media (max-width:600px)': {
      fontSize: '.8rem',
    },
  },
  icons: {
    color: "#black",
    fontSize: '1.5rem',
    fontWeight: '500',
    fontFamily: 'Poppins'
  },

}));
const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Grid container justify="center">
        <Button // on LinkedIn
          href={contact.linkedin}
          target="_blank"
          className={classes.icons}>
          <LinkedIn className={classes.icons} />
        </Button>

        <Button
          href={contact.github}
          target="_blank" // on Github
          className={classes.icons}>
          <GitHub className={classes.icons} />
        </Button>

        <Button // on Web
          href={contact.mysite}
          target="_blank"
          className={classes.icons}>
          <Language className={classes.icons} />
          <span style={{ marginLeft: ".5vw", fontSize: "1rem" }}>
            sarahdurkin.com
          </span>
        </Button>
      </Grid>
    </div>
  );
};

export default Footer