import React from "react";
//material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Avatar from '@material-ui/core/Avatar';
import about from "../../utils/about";

const useStyles = makeStyles((theme) => ({

    root: {
        background: 'white',
        backgroundAttachment: `fixed`,
        width: '100vw',
        height: '100vh',
       

    },

    box: {
        width: `90vw`,
        marginTop: `2rem`,
        marginLeft: `2rem`,
        marginRight: `2rem`,
        justifyContent: `center`,
        '@media  (max-width:600px)': {
            flexdirection: `column`,
            flexwrap: `wrap`
             }
        
    },
    nameclass: { marginTop: `10vh`,
        fontFamily: `Poppins`,
        color: `#5bb381`,
        fontSize: `2rem`,
        weight: 900
    },
    text: {
        fontFamily: `Poppins`,
        marginTop: `.5vh`,
        color: `black`,
        textAlign: `center`,
        fontsize: `.8rem`,
        maxWidth: `60vw`
       
    },
    avatar: {
        width: theme.spacing(15),
    height: theme.spacing(15),
    border: `2px`,
    marginBottom: `5px`,

        margintop: `5px`,
        '@media (max-width:600px)': {
        width: `10rem`,
        height: `10rem`
        },
    }

}))


const Home = () => {
    const home = useStyles();

    return (
        <div className={home.root} justify="center" >
            <Grid container justify="center" className={home.box}>
            <Grid container justify="center">
            <Typography className={home.nameclass} >
                    {about.name}
                </Typography>
                </Grid> 
                <Grid container justify="center">
            <Avatar className={home.avatar} src='https://res.cloudinary.com/www-actionnetwork-com/image/upload/v1623987783/77648727_yfozng.jpg' alt="Sarah headshot" />
            </Grid>
                <Grid container justify="center">
            <Typography className={home.text}>
                    {about.intro}
                </Typography>
                </Grid> 
                <Grid container justify="center">
                <Typography className={home.text}>       {about.bio}     </Typography>
               
                </Grid>
             </Grid>

             
            
        </div>



    );

}
export default Home