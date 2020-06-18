import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import LandingView from './vbjComponents/LandingView';
import * as ROUTES from '../constants/routes';
import LoginView from './vbjComponents/LoginView';
import firebase from '../config/firebase';
import Dashboard from './vbjComponents/DashboardComponent';
import RegisterView from './AshwinComponents/RegisterView';
import PmFund from './AshwinComponents/PmFund';
import Donation from './AshwinComponents/Donation';
import VolunteerReg from './vbjComponents/VolunteerRegComponent';



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
                    <Route path={ROUTES.REGISTER} component={RegisterView} />
                    <Route path = {ROUTES.DASHBOARD} component = {Dashboard} />
                    <Route path={ROUTES.VOLUNTEER_REG} component={VolunteerReg} />
                    <Route path={ROUTES.PM_FUND} component={PmFund} />
                    <Route path={ROUTES.DONATION} component={Donation} />
                </Switch>
                 
            </div>
        );
    }
}

export default Main;