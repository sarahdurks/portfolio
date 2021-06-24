import React from "react";
//Material UI Items
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


const useStyles = makeStyles(() => ({

    menuRail: {
        width: 240,
        textAlign: 'left',
        font: 'Roboto',
        background: "purple",
        height: "100%",
        padding: '2rem',
    },
    active: {
        color: '#67FCED'
      
    },
    listItem: {
        color: "white",
        "&:hover": {
            color: "#D4BFF9"
        },
    },
}));

const Rail = ({ navigationLinks }) => {
    const classes = useStyles();

    return (
        <Box className={classes.menuRail} component="div">
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