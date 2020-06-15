import React from 'react';
import Button from '@material-ui/core/Button'
import { Link, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import '../../App.css';
import Header from './HeaderView';


const Landing = () => {
    return(
        <div className="bg">
            <Header />
            <div className="container">
                <div className="align">
                    <h1 style={{marginBottom:'20px'}} >Click Here to Sign In</h1>
                    <Link to={ROUTES.SIGN_IN}>
                        <Button variant="contained" color="primary">SIGN IN</Button>
                    </Link>
                </div>
            </div>
        </div>
    );

}

export default Landing;