import React from 'react';
import Button from '@material-ui/core/Button'
import { Link, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import '../../App.css';

const Landing = () => {
    return(
        <div className="container">
            
            <div className="bg-text">
                <h1>Welcome..</h1>
                <Link to={ROUTES.SIGN_IN}>
                    <Button variant="contained" color="primary">LOGIN/SIGNUP</Button>
                </Link>
            </div>
        </div>
    );

}

export default Landing;