import React, { Component } from "react";
import {
  Jumbotron,
  FormGroup,
  Form,
  FormText,
  Label,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import Header from "./HeaderView";
import { AvForm, AvField } from "availity-reactstrap-validation";
import firebase from "../../config/firebase";
import { Redirect } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "../../App.css";
import SideNavBar from "../arumugamComponents/SideNavBar";



class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "verify",
      input: false,
      success: false,
      fire: "false",
      alert: false,
      disabled: true,
      regTrigger: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSignInSubmit = this.onSignInSubmit.bind(this);
  }

  setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // this.onSignInSubmit();
        },
      }
    );
  };

  onSignInSubmit = (event) => {
    var phoneNumber = "+91" + this.mobile.value;
    console.log(phoneNumber);
    this.setState({
      disabled: false,
      input: true,
      value: "Enter and proceed",
    });

    this.setUpRecaptcha();
    var appVerifier = window.recaptchaVerifier;
    console.log("Indie Onsub");
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP Send");
        let code = prompt("Enter the OTP", "");
        if (code == null) return;
        confirmationResult
          .confirm(code)
          .then((result) => {
            console.log(result.user, "user");
            // fire = "true";
            let ref = firebase.database().ref();
            ref.child("users").on("value", (snapshot) => {
                if(snapshot.hasChild(result.user.uid)){
                  this.setState({
                    regTrigger : true
                  })
                }else{
                  
                  this.setState(
                    {
                      fire: "true",
                    },
                    () => {
                      console.log(this.state.fire);
                    }
                  );
                }
                
            });
            
          })
          .catch((err) => {
            console.log(err);
            window.alert("Invalid");
          });
      })
      .catch(function (error) {
        // Error; SMS not sent
        // ...
        console.log(error);
      });
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    if (this.state.fire === "true") {
      return <Redirect to={ROUTES.REGISTER} />;
    }
    if(this.state.regTrigger){
        return <Redirect to={ROUTES.DASHBOARD}/>;
    }

    return (
      <div>
      	<Header name="Login" />
        <div id="recaptcha-container"></div>
        

        <div className="row" style={{marginTop: '0px'}}>
          <div className="col-12 col-sm-6">
            <img
              className="myImage"
              src="https://www.designhost.in/images/sms/otp-sms.jpg"
              width="600px"
              height="582px"
              alt="img"
            ></img>
          </div>

          <div className="col-12 col-sm-4">            
            <div style={{width: '350px', marginLeft: '100px'}}>
              <h2 className="topp">Login</h2>
              <Input type="text" value="+91" className="align"></Input>
              <Input
                className="align"
                type="text"
                id="mobile"
                disabled={this.state.input}
                maxLength="10"
                placeholder="Mobile number"
                innerRef={(input) => (this.mobile = input)}
              ></Input>
              {/* <Input className="align" type="text" id="otp" placeholder="enter otp" hidden={this.state.disabled} innerRef={(input) => this.otp=input}></Input> */}
              <Button
                className="align"
                color="danger"
                outline="none"
                block
                size="btn-lg"
                onClick={this.onSignInSubmit}
              >
                <i
                  className="fa fa-sign-in"
                  aria-hidden="true"
                  style={{ marginRight: "7px" }}
                ></i>
                {this.state.value}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginView;
