import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Skills from "../../utils/skills";
import resumePDF from '../../assets/resume/Resume.pdf';

const useStyles = makeStyles((theme) => ({
    root: {
background: `Poppins`
}
})
)
const Resume = () => {
    const classes = useStyles();
    const mySkillset = Skills.skills

    return ( 
        <div className={classes.root}>
           <Grid container justify="center" > 
            <Typography className={classes.heading} >
               Sarah's Toolkit 
            </Typography> 
            </Grid>
            <Grid container
                direction="row">
                {mySkillset.map(skills => {
                    return (
                    
                //   {skills.frontend}
                // {skills.backend}
                            
                    )
                })}
            
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