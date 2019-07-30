import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
       <div className={classes.root}>
            <AppBar position={"static"}>
                <ToolBar color={"primary"}>
                    <Typography variant="h5" color={"secondary"}>
                       Jacolby's Blog
                    </Typography>
                </ToolBar>
            </AppBar>
       </div>
    )
}


export default Header;