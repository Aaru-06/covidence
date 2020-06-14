import React,{Component} from 'react';
import { Jumbotron, FormGroup, Form, FormText, Label, Input, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import firebase from '../../config/firebase';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


class LoginView extends Component{
    constructor(props){
        super(props);

        this.state={
            
            otp: '',
            success: false,
            alert: false,
            disabled: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);        



    }

    handleClick(e){
        
        let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
        let number = '+91'+this.phoneno.value;
        firebase.auth().signInWithPhoneNumber(number,recaptcha)
            .then(function(e){
                this.setState({disabled: false})
                let code = prompt('enter the otp','');
                if(code == null) return;
                e.confirm(code)
                    .then((result) => {
                        console.log(result.user,'user');
                    
                        window.alert("Number Verified");
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
    }
    

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    toggleModal(){
        this.setState({
            isModalRegister: !this.state.isModalRegister
        });
    }


    render(){

        if(this.state.success){
            return <Redirect to={ROUTES.DASHBOARD}/>
        }
        if(this.state.alert){
            window.alert("Invalid User");
        }
        
        return(

            <div>
                <input type="text" id="otp" innerRef={(input) => this.phoneno=input} />
                <button onClick={this.handleClick} id="recaptcha">Verify</button>
                
            </div>
            
            
           
            

        
        );
    }
}


export default LoginView;



