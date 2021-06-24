import React from "react";
//Material UI Items
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles(() => ({

    menuRail: {
        width: 400,
        textAlign: 'left',
        fontFamily: 'Poppins',
        weight: `800`,
        background: "orange",
        height: "100%",
        padding: '2rem',
    },
    active: {
        color: '#67FCED',

        fontFamily: 'Poppins',
      
    },
    listItem: {
        color: "white",
        "&:hover": {
            color: "black"
        },
        marginTop: `2rem`,
        fontSize: `3rem`,
        fontFamily: 'Poppins',
        marginBottom: `2rem`
    },
    railname: {
        fontSize: `1.5rem`,
        fontFamily: 'Poppins',
        marginTop: `1rem`,
        marginBottom: `1rem`,
        color: `black`,
        weight: `extrabold`,
        justifyContent: `center`
    },
    nowrap: {
        width: 300
    },
    avatar: {
        width: `5rem`,
        height: `5rem`,
        justifyContent: `center`,
        '@media (max-width:600px)': {
        width: `60vw`,
        height: `30vh`
        }
    }
}));

const Rail = ({ navigationLinks }) => {
    const classes = useStyles();

    return (
        <Box className={classes.menuRail} component="div">
        <Divider />      <Divider /><Grid justify="center">
              <Typography className={classes.railname}>SARAH DURKIN<Avatar className="avatar" src='https://res.cloudinary.com/www-actionnetwork-com/image/upload/v1624556702/lion_kk6kje.png' alt="Sarah headshot" /></Typography>
              </Grid> <Divider /><Divider />
            <List>
                {navigationLinks.map((item) => (
                    <ListItem
                        key={item.listText}
                        className={document.location.pathname === item.listPath ? classes.active : classes.listItem}
                        component={Button}
                        href={item.listPath}>
                        <ListItemText primary={item.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default Rail