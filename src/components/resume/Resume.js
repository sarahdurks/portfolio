import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SkillsFE from "../../utils/skillsFE";
import SkillsBE from "../../utils/skillsBE";
import resumePDF from '../../assets/resume/Resume.pdf';

const useStyles = makeStyles(() => ({
    root: {

        backgroundAttachment: `fixed`,
        width: `100vw`,
        height: `100vh`,
        fontFamily: `Poppins`
    },

heading: { 
    paddingTop: `10vh`,
    color: `black`,
    fontFamily: `Poppins`,
    fontSize: `2rem`,
    justifyContent: `center`
},
skills: {
    justifyContent: `center`
},
skillbox: {
   
    marginTop: `15vh`,
    marginBottom: `15vh`,

    justifyContent: `center`
},
h2:
{
    color:  `pink`,

    fontFamily: `Poppins`,
    fontSize: `1.5rem`,
},
resume: {
      marginBottom: `15vh`},

      button:
      {
          color:`orange`,
          backgroundColor: `white`,
        fontFamily: `Poppins`}
    
})
)
const Resume = () => {
    const classes = useStyles();

    return ( 
        <div className={classes.root}>
           <Grid className={classes.box} container justify="center" > 
        
            <Typography className={classes.heading} >
               Sarah's Toolkit 
            </Typography> 
            </Grid>
            <Grid container justify="center"
            className={classes.skillbox}>
                        <Typography className={classes.h2} >
            Front End
            </Typography> </Grid><Grid container  justify="center">
                {SkillsFE.skills}
            </Grid>

            <Grid container justify="center"
              className={classes.skillbox}>
                        <Typography className={classes.h2} >
            Back End
            </Typography> </Grid><Grid container justify="center">
                {SkillsBE.skills}
            </Grid>
            <Grid container justify="center" className={classes.resume} > 
            <Button className={classes.button} target="_blank" href={resumePDF}> 
                  Download Resumé 
                </Button>
        
                </Grid>
               
        </div>
    );
}

export default Resume