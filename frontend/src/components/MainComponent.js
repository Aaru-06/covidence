import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import LandingView from './vbjComponents/LandingView';
import * as ROUTES from '../constants/routes';
import LoginView from './vbjComponents/LoginView';
import firebase from '../config/firebase';
import Dashboard from './vbjComponents/DashboardComponent';

class Main extends Component{
    constructor(props){
        super(props);
        
    }

    render(){

  

        return(
            <div>
                <Switch>
                    <Route exact path = {ROUTES.LANDING} component={LandingView} />
                    <Route path={ROUTES.SIGN_IN} component={LoginView} />
                    <Route path = {ROUTES.DASHBOARD} component = {Dashboard} />
                </Switch>
                 
            </div>
        );
    }
}

export default Main;