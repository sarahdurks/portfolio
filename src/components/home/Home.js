import React from "react";
//material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Avatar from '@material-ui/core/Avatar';
import about from "../../utils/about";

const useStyles = makeStyles((theme) => ({

    root: {
        background: '#4A154B',
        width: '100vw',
        height: '100vh',
        justifyContent: `center`,

    },

    box: {
        width: '80vw',
        margin: `10vw`,
        paddingTop: `10vh`
    },
    h1: {
        fontFamily: `Poppins`,
        color: `#5bb381`,
        size: `10rem`,
        weight: 900
    },
    text: {
        font: `Roboto`,
        color: `white`,
        textAlign: `center`,
        fontsize: `.8rem`
    },
    avatar: {
        width: `20rem`,
        height: `20rem`,
        margintop: `10px`,
        '@media (max-width:600px)': {
        width: `60vw`,
        height: `30vh`
        },
    }

}))


const Home = () => {
    const home = useStyles();

    return (
        <div className={home.root}>
            <Grid container justify="center" className={home.box}>
            <Grid container justify="center">
            <Typography className={home.h1} component="h1">
                    {about.name}
                </Typography>
                </Grid> 
   
                <Grid container justify="center">
            <Typography className={home.text}>
                    {about.intro}
                </Typography>
                </Grid> 
                <Grid container justify="center">
                <Typography className={home.text}>       {about.bio}     </Typography>
                <Grid container justify="center">
            <Avatar className={home.avatar} src='https://res.cloudinary.com/www-actionnetwork-com/image/upload/v1623987783/77648727_yfozng.jpg' alt="Sarah headshot" />
            </Grid>
                </Grid>
             </Grid>

             
            
        </div>



    );

}
export default Home