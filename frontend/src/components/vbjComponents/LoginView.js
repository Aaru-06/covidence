import React,{Component} from 'react';
import { Jumbotron, FormGroup, Form, FormText, Label, Input, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import firebase from '../../config/firebase';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


class LoginView extends Component{
    handleClick = () => {
        let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
        let number = '+918072297684';
        firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e){
            let code = prompt('enter the otp','');
            if(code == null) return;
            e.confirm(code).then(function(result){
                console.log(result.user,'user');
                document.querySelector('label').textContent = result.user.phoneNumber + "Number Verified";

            }).catch((error)=>{
                console.log(error);
            })
        })
    }
    render(){
        return(
            <div>
                <label></label>
                <button onClick={this.handleClick}>Click here</button>
            </div>
        )
    }
}

export default LoginView;