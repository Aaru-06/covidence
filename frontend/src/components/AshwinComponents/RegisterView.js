import React, { Component } from "react";
import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio,
} from "availity-reactstrap-validation";
import Header from "../vbjComponents/HeaderView";
import { FormGroup, Button } from "reactstrap";
import firebase from "../../config/firebase";
import * as ROUTES from "../../constants/routes";
import { Redirect } from "react-router-dom";
class RegisterView extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      flag: false,
      local: null,
    };
  }

  handleSubmit(event, errors, values) {
    event.preventDefault();
    let ref = firebase.database().ref();
    this.setState({ errors, values });
    console.log(values["address"]);
    if (errors.length === 0) {
      ref
        .child("users")
        .push({
          Address: values["address"],
          Dob: values["dob"],
          Gender: values["gender"],
          Name: values["idname"],
          Pincode: values["pincode"],
        })
        .then((snap) => {
          var ckey = snap.key;
          console.log(ckey);
          this.setState({
            fire: ckey,
          });
          
          localStorage.setItem("snapKey", snap);
        });
      this.setState({
        flag: true,
      });
    } else {
      console.log(errors);
    }
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    console.log(this.state.fire);
    if (this.state.flag) {
      return <Redirect to={ROUTES.DASHBOARD} />;
    }
    return (
      <div className="statpage">
        <Header name="Register" />
        <div className="row">
          <div className="col-12 col-sm-6">
            <img
              className="myImage"
              src="https://i1.wp.com/2020.ieeeicassp.org/wp-content/uploads/2020/01/registration1.jpg?fit=855%2C515&ssl=1&w=640"
              width="600px"
              height="930px"
              alt="img"
            ></img>
          </div>

          <div className="col-12 col-sm-6">
            <div className="reg">
              <h2 id="regh2">Registration Form</h2>
              <AvForm onSubmit={this.handleSubmit}>
                <AvField
                  className="reginput"
                  name="idname"
                  id="idname"
                  label="Name"
                  type="text"
                  innerRef={(input) => (this.idname = input)}
                  errorMessage="Name Required ..!!"
                  required
                ></AvField>
                <AvField
                  className="reginput"
                  name="address"
                  id="address"
                  label="Address"
                  type="text"
                  innerRef={(input) => (this.address = input)}
                  errorMessage="Address Required ..!!"
                  required
                ></AvField>

                <AvField
                  className="reginput"
                  name="pincode"
                  id="pincode"
                  label="Pincode"
                  type="text"
                  innerRef={(input) => (this.pincode = input)}
                  errorMessage="Pincode Required ..!!"
                  validate={{ number: true, required: true }}
                ></AvField>
                <AvField
                  className="reginput"
                  name="dob"
                  id="dob"
                  label="Date of Birth"
                  type="date"
                  innerRef={(input) => (this.dob = input)}
                  errorMessage="Date of Birth Required ..!!"
                  required
                ></AvField>

                <AvRadioGroup
                  name="gender"
                  id="gender"
                  label="Gender"
                  required
                  errorMessage="Pick one ..!!"
                >
                  <AvRadio
                    className="genopt"
                    customInput
                    label="Male"
                    value="male"
                  />
                  <AvRadio
                    className="genopt"
                    customInput
                    label="Female"
                    value="female"
                  />
                </AvRadioGroup>

                <FormGroup id="regbut">
                  <Button
                    style={{
                      fontSize: "17px",
                      marginBottom: "50px",
                      borderWidth: "3px",
                      boxShadow: "0px 7px 5px #d4d4d4",
                    }}
                    color="danger"
                    outline="none"
                  >
                    <i
                      class="fa fa-user-circle-o"
                      aria-hidden="true"
                      style={{ marginRight: "7px" }}
                    ></i>
                    Register
                  </Button>
                </FormGroup>
              </AvForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterView;
