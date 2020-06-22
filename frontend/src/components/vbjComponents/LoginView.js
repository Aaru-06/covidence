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
import { AvForm, AvField } from "availity-reactstrap-validation";
import firebase from "../../config/firebase";
import { Redirect } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "../../App.css";

const Header = () => {
  return (
    <Jumbotron className="jumbo ">
      <div className="row row-header">
        <div className="col-12 col-sm-1">
          <img
            src="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-us.s3.amazonaws.com%2Fd95af3ac-7448-11ea-90ce-5fb6c07a27f2?fit=scale-down&source=next&width=700"
            width="40px"
            height="40px"
            alt="heros"
          ></img>
        </div>
        <div className="col-12 col-sm-10">
          <h1>SignIn</h1>
          <p></p>
        </div>
      </div>
    </Jumbotron>
  );
};

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
            this.setState(
              {
                fire: "true",
              },
              () => {
                console.log(this.state.fire);
              }
            );
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

    return (
      <div>
        <div id="recaptcha-container"></div>

        <div className="row">
          <div className="col-12 col-sm-6">
            <img
              className="myImage"
              src="https://cdn.pixabay.com/photo/2020/03/31/14/04/covid-19-4987797__340.jpg"
              width="600px"
              height="800px"
              alt="img"
            ></img>
          </div>

          <div className="col-12 col-sm-4">
            <Header />
            <div>
              <h2 className="topp">Login</h2>
              <Input type="text" value="+91" className="align"></Input>
              <Input
                className="align"
                type="text"
                id="mobile"
                disabled={this.state.input}
                maxLength="10"
                placeholder="Enter your phone number"
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
                  class="fa fa-sign-in"
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
