import React from "react";
//Material UI Items
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({

    menuRail: {
        width: 400,
        textAlign: 'left',
        fontFamily: 'Poppins',
        weight: `800`,
        background: "purple",
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
            color: "#D4BFF9"
        },
        marginTop: `2rem`,
        fontSize: `3rem`,
        fontFamily: 'Poppins',
        marginBottom: `2rem`
    },
    railname: {
        fontSize: `2rem`,
        fontFamily: 'Poppins',
        marginTop: `1rem`,
        marginBottom: `1rem`,
        color: `white`
    }
}));

const Rail = ({ navigationLinks }) => {
    const classes = useStyles();

    return (
        <Box className={classes.menuRail} component="div">
              <Divider />
              <Typography className={classes.railname}>SARAH DURKIN</Typography>
            <Divider />
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