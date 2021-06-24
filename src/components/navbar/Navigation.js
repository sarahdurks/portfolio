

import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Rail from "./Rail"; //for drawer

import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BackspaceIcon from '@material-ui/icons/Backspace';

const useStyles = makeStyles(() => ({
    
    root: {
        backgroundColor: `purple`
    },
    
    topNav: {

        margin: 0,
        position: `fixed`,
        width: '100%',
        height: "10vh",

        backgroundColor: `orange`,
        fontFamily: `Poppins`,
        zindex: '1',
        top: '0',
    },
    opener: {
        fontSize: `3.5rem`,
    }
 
}));
const Navigation = () => {

    const [navigationLinks] = useState([
        { listText: "About", listPath: "/" },
        { listText: "Portfolio", listPath: "/portfolio" },
        { listText: "Contact", listPath: "/contact" },
        { listText: "Resume", listPath: "/resume" },
    ]);
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    return (
        <React.Fragment>
           
                <AppBar component="nav" position="static" className={classes.topNav}>
                    <Toolbar>
                        <Grid container justify="right">
                            <IconButton onClick={() => setOpen(true)}>
                           <BackspaceIcon className={classes.opener}>  </BackspaceIcon>
                            </IconButton>
                        </Grid>
                    </Toolbar>
                </AppBar>
          
            <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
                <Rail
                    navigationLinks={navigationLinks}
                />
            </Drawer>
        </React.Fragment>
    );
};

export default Navigation

