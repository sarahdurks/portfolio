

import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Rail from "./Rail"; //for drawer
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BackspaceIcon from '@material-ui/icons/Backspace';

const useStyles = makeStyles(() => ({
    topNav: {
        background: "#4A154B",
        margin: 0,
        position: `fixed`,
        width: '100%',
        height: "5vh",
        padding: '1rem',
        zindex: '1',
        top: '0',
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
            <Box component="nav">
                <AppBar position="static" className={classes.topNav}>
                    <Toolbar>
                        <Grid container justify="right">
                            <IconButton onClick={() => setOpen(true)}>
                           <BackspaceIcon >  </BackspaceIcon>
                            </IconButton>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
                <Rail
                    navigationLinks={navigationLinks}
                />
            </Drawer>
        </React.Fragment>
    );
};

export default Navigation

