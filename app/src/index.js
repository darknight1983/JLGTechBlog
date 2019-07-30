import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createBlog  from './components/createBlog';
import * as serviceWorker from './serviceWorker';

import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: green,
    },

})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Router>
            <Route path={"/"} exact component={App} />
            <Route path={"/createBlog"} exact component={createBlog}/>
        </Router>
    </MuiThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
