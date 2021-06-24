import React from "react";
//material UI
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";


import about from "../../utils/about";

const useStyles = makeStyles((theme) => ({

    root: {
        background: 'black',
        width: '100%',
        height: '100vh'
    },
    h1: {
        font: `Poppins`
    }
}))


const Home = () => {
    const home = useStyles();

    return (
        <div className={home.root}>
            <Grid container justify="center">
                
            </Grid>

            <Grid container justify="center">
            <Typography className={home.h1}>
                    {about.name}
                </Typography>
                </Grid> 
   
                <Grid container justify="center">
            <Typography className={home.h1}>
                    {about.intro}
                </Typography>
                </Grid> 
                <Grid container justify="center">
                    {about.bio}
             
                </Grid>
             

             
            
        </div>



    );

}
export default Home