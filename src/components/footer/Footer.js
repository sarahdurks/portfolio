

import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { LinkedIn, GitHub, Language } from '@material-ui/icons';
import contact from '../../utils/contact';

const useStyles = makeStyles(() => ({
  footerContainer: {
      display: 'flex',
      position: "fixed",
  },
  icons: {
      color: "#B99BC9",
      fontSize: '2rem',
      fontWeight: '700',
      fontFamily: 'Poppins'
  },
 
}));
const Footer = () => {
  const classes = useStyles();

  return (
      <div className={classes.footerContainer}>
           <Grid container justify="center">
          <Button // on LinkedIn
              href={contact.linkedin}
              target="_blank"
              className={classes.icons}>
              <LinkedIn className={classes.icons} />
              <span style={{ margin: "5px", fontSize: "1rem" }}>
                LINKEDIN
              </span>
          </Button>
 
          <Button 
              href={contact.github}
              target="_blank" // on Github
              className={classes.icons}>
              <GitHub className={classes.icons} />
              <span style={{ marginLeft: "2vw", fontSize: "1rem" }}>
                GITHUB
              </span>
          </Button>
          
          <Button // on Web
              href={contact.mysite}
              target="_blank"
              className={classes.icons}>
              <Language className={classes.icons} />
              <span style={{ marginLeft: "2vw", fontSize: "1rem" }}>
                SARAHDURKIN.COM
              </span>
          </Button>
          
          </Grid>
      </div>
  );
};

export default Footer