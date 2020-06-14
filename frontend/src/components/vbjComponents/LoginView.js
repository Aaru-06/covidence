import React, { Component } from 'react';
import { Jumbotron, FormGroup, Form, FormText, Label, Input, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import firebase from '../../config/firebase';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


class LoginView extends Component {
    constructor(props) {
        super(props);

        this.state = {

            otp: '',
            success: false,
            alert: false,
            disabled: true
        }
        this.handleChange = this.handleChange.bind(this);



    }

    setUpRecaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': function (response) {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // this.onSignInSubmit();
            }
        });
    }

    onSignInSubmit = (event) => {
        var phoneNumber = "+917550145401";
        this.setUpRecaptcha();
        var appVerifier = window.recaptchaVerifier;
        console.log("Indie Onsub")
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log("OTP Send");
                let code = prompt('enter the otp', '');
                if (code == null) return;
                confirmationResult.confirm(code)
                    .then((result) => {
                        console.log(result.user, 'user');

                        window.alert("Number Verified");
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }).catch(function (error) {
                // Error; SMS not sent
                // ...
                console.log(error);
            });
    }

    

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    toggleModal() {
        this.setState({
            isModalRegister: !this.state.isModalRegister
        });
    }


    render() {

        if (this.state.success) {
            return <Redirect to={ROUTES.DASHBOARD} />
        }
        if (this.state.alert) {
            window.alert("Invalid User");
        }

        return (

            <div >
                <div id="recaptcha-container"></div>
                <button onClick={this.onSignInSubmit}>Verify</button>
                
            </div>






        );
    }
}


export default LoginView;



