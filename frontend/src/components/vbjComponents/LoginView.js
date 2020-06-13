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
            fullname: '',
            email: '',
            password: '',
            dob: '',
            phoneno: '',
            isModalRegister: false,
            success: false,
            alert: false 
        }
        this.onSignup = this.onSignup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);



    }

    onSignup(e){
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
            .then((data) => {
                this.setState({
                    success: true
                })
            })
            .catch((err) => {
                this.setState({
                    alert: true
                })
                console.log(err);
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
            <div className="bg">
            <div className="container">
                <h1>Login</h1>
                <AvForm>
                    <AvField name="username" id="username" label="Username" type="text" innerRef={(input)=> this.lusername=input }  ></AvField>
                    <AvField name="password" id="password" label="Password" type="password" innerRef={(input)=> this.password=input }  />

                    <Button type="submit" value="submit" color="primary" size="btn-lg" block><i className="fa fa-sign-in " aria-hidden="true" style={{marginRight: '7px'}}></i>Login</Button>
                    
                    <p>New User .... </p>
                    

                </AvForm>
                <Button   onClick={this.toggleModal} color="danger" outline="none"><i className="fa fa-user-plus " aria-hidden="true" style={{marginRight: '7px'}}></i>Register</Button>

                
            </div>
            <Modal className="bg" isOpen={this.state.isModalRegister} toggle={this.toggleModal}>
                <ModalHeader className="head" toggle={this.toggleModal}>Register</ModalHeader>
                    <ModalBody>
                        <AvForm onSubmit={this.onSignup}>
                            
                            <AvField name="fullname" id="fullname"   label="Full Name" type="text" errorMessage="Invalid" onChange = {this.handleChange} value={this.state.fullname}  validate={{
                                required: {value: true},
                                minLength: {value: 4},
                                maxLength: {value: 16}
                            }} />
                            
                            <br/>

                            
                            <AvField name="email" id="email" label="Email" type="email"  value={this.state.email} errorMessage="required" onChange = {this.handleChange} validate={{
                                required: true 
                            }} />
                            
                            <AvField name="password" id="password" label="Password" type="password" value={this.state.password} errorMessage="Minimum 8 characters" onChange = {this.handleChange} validate={{
                                required: true,
                                minLength: {value: 8}
                            }}/>
                           
                           <AvField name="dob" id="dob" label="DOB" type="date" errorMessage="Required" value={this.state.dob} onChange={this.handleChange} validate={{
                                required: true
                            }}/>
                            
                            <AvField name="mobile" id="mobile" label="Mobile No" type="text"  value={this.state.phoneno} onChange={this.handleChange} validate={{
                                number: true,
                                required: true
                                }} />
                            
                            <Button  type="submit" value="submit" color="danger" size="btn-lg" block><i className="fa fa-user-plus " aria-hidden="true" style={{marginRight: '7px'}}></i>Register</Button>

                           
                        </AvForm>
                    </ModalBody>
            </Modal>
            </div>
            

        
        );
    }
}


export default LoginView;



