import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Home from 'views/Home/Home';
import Analysis from "views/Analysis/Analysis";
import Task from "views/Task/Task";
import { Provider } from "react-redux";
import store from './redux/store';
import TaskLog from "views/Task/TaskLog";

var hist = createBrowserHistory();

ReactDOM.render(
    
    <React.StrictMode>
        <Provider store={store}>
    <Router history={hist}>
        <Switch>
            <Route path="/landing-page" component={LandingPage} />
            <Route path="/profile-page" component={ProfilePage} />
            <Route path="/login-page" component={LoginPage} />
            <Route path="/all" component={Components} />
            <Route path="/analysis" component={Analysis} />
            <Route path="/task" component={Task} />
            <Route path="/task-log" component={TaskLog} />
            <Route path="/" component={Home} />
        </Switch>
    </Router>
    </Provider>
    </React.StrictMode>
    ,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
