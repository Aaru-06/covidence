import React, { Component } from "react";
import firebase from "../../config/firebase";
import * as ROUTES from "../../constants/routes";
import { Redirect } from "react-router-dom";

import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio,
} from "availity-reactstrap-validation";
import { FormGroup, Button } from "reactstrap";
import "../../App.css";

class RegisterStore extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      flag: false,
    };
  }

  handleSubmit(event, errors, values) {
    event.preventDefault();
    let ref = firebase.database().ref();
    this.setState({ errors, values });
    console.log(values["address"]);
    console.log(values["select"]);
    console.log(values["pincode"]);
    console.log(values["idname"]);
    if (errors.length === 0) {
      ref.child("Stores").push({
        Address: values["address"],
        Name: values["idname"],
        Pincode: values["pincode"],
        Type: values["select"],
      });
      this.setState({
        flag: true,
      });
    } else {
      console.log(errors);
    }
  }

  render() {
    if (this.state.flag) {
      return <Redirect to={ROUTES.STORE} />;
    }
    return (
      <div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <img
              className="myImage"
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              width="600px"
              height="800px"
              alt="img"
            ></img>
          </div>

          <div className="col-12 col-sm-6">
            <div className="reg">
              <h3 id="regh3">Registration Form</h3>
              <AvForm onSubmit={this.handleSubmit}>
                <AvField
                  className="reginput"
                  name="idname"
                  id="idname"
                  label="Name"
                  placeholder="Enter store name"
                  type="text"
                  innerRef={(input) => (this.idname = input)}
                  errorMessage="Name Required ..!!"
                  required
                ></AvField>

                <AvField type="select" name="select" label="Type" required>
                  <option>Select</option>
                  <option>Grocery</option>
                  <option>Departmental</option>
                  <option>Fruits</option>
                  <option>Fruits and Groceries</option>
                </AvField>
                <AvField
                  className="reginput"
                  name="address"
                  id="address"
                  label="Address"
                  placeholder="Enter store address"
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
                  placeholder="Enter your pincode"
                  type="text"
                  innerRef={(input) => (this.pincode = input)}
                  errorMessage="Pincode Required ..!!"
                  validate={{ number: true, required: true }}
                ></AvField>

                <FormGroup id="regbut">
                  <Button
                    style={{ fontSize: "18px" }}
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

export default RegisterStore;
