

import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Rail from "./Rail"; //for drawer
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
    topNav: {
        background: "purple",
        margin: 0,
        width: '100%',
        height: "5vh",
        padding: '1rem'
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

