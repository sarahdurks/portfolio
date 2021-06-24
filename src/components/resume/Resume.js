import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SkillsFE from "../../utils/skillsFE";
import SkillsBE from "../../utils/skillsBE";
import resumePDF from '../../assets/resume/Resume.pdf';

const useStyles = makeStyles((theme) => ({
    root: {
background: `purple`,
    },

h2: { 
    font: `Poppins`
}
})
)
const Resume = () => {
    const classes = useStyles();

    return ( 
        <div className={classes.root}>
           <Grid container justify="center" > 
            <Typography className={classes.heading} >
               Sarah's Toolkit 
            </Typography> 
            </Grid>
            <Grid container
                direction="row">
                        <Typography className={classes.h2} >
            Front End
            </Typography> 
                {SkillsFE.skills}
            </Grid>

            <Grid container
                direction="row">
                        <Typography className={classes.h2} >
            Back End
            </Typography> 
                {SkillsBE.skills}
            </Grid>
            <Grid container justify="center" > 
            <Button target="_blank" href={resumePDF}> 
                  Download Resumé 
                </Button>
                </Grid>
               
        </div>
    );
}

export default Resume