import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import App from "./App";
import App2 from "./components/App2"


import history from './history';

export default function Routes(){

        return (
            <Router history={history}>
                <Switch>
                  
                    <Route path="/App" component={App} />
                    <Route path="/App2" component={App2} />
                
                </Switch>
            </Router>
        )
    }
