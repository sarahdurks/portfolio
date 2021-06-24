import React from "react";
//material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Avatar from '@material-ui/core/Avatar';
import about from "../../utils/about";

const useStyles = makeStyles((theme) => ({

    root: {
        background: 'black',
        width: '100%',
        height: '100vh',
        justifyContent: `center`
    },

    box: {
        width: '80vw',
        margin: `10vw`
    },
    h1: {
        font: `Poppins`,
        color: `white`
    },
    avatar: {
        width: theme.spacing(50),
        height: theme.spacing(50),
        margin: theme.spacing(2),
       
    }

}))


const Home = () => {
    const home = useStyles();

    return (
        <div className={home.root}>


            <Grid container justify="center" className={home.box}>
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
                <Typography className={home.h1}>       {about.bio}     </Typography>
                <Grid container justify="center">
            <Avatar className={home.avatar} src='https://res.cloudinary.com/www-actionnetwork-com/image/upload/v1623987783/77648727_yfozng.jpg' alt="Sarah headshot" />
            </Grid>
                </Grid>
             </Grid>

             
            
        </div>



    );

}
export default Home