import React, { Component } from "react";
import { AvForm, AvField, AvInput } from "availity-reactstrap-validation";
import { FormGroup, Button } from "reactstrap";
import Header from "./HeaderView";
import CarouselComponent from "./CarouselComponent";
import firebase from "../../config/firebase";
import * as ROUTES from "../../constants/routes";
import { Redirect } from "react-router-dom";
import SideNavBar from "../arumugamComponents/SideNavBar";

class VolunteerReg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, errors, values) {
    event.preventDefault();
    let ref = firebase.database().ref();
    this.setState({ errors, values });
    console.log(values["select"]);
    console.log(values["skills"]);
    if (errors.length === 0) {
      ref.child("Volunteers-Registers").push({
        Skills: values["skills"],
        Work: values["select"],
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
      window.alert("Registered Successfully. Well done Volunteer!!");
    }
    return (
      <div>
        <Header name="Volunteer-Registration" />
        <SideNavBar history={this.props.history} />
        <CarouselComponent />
        <div className="container">
          <h2 style={{ textAlign: "center" }}>Registration Form</h2>
          <AvForm className="margin" onSubmit={this.handleSubmit}>
            <AvField
              style={{
                marginBottom: "20px",
                borderWidth: "3px",
                boxShadow: "0px 7px 5px #d4d4d4",
              }}
              type="select"
              name="select"
              label="Work"
              helpMessage="Select a Work depending upon your Skills"
              errorMessage="Pick one ..!!"
              required
            >
              <option value="" disabled selected>
                ...
              </option>
              <option>Traffic</option>
              <option>Distribution</option>
              <option>Others</option>
            </AvField>
            <AvInput
              type="textarea"
              name="skills"
              id="skills"
              style={{
                height: "80px",
                marginTop: "20px",
                borderWidth: "3px",
                boxShadow: "0px 7px 5px #d4d4d4",
              }}
              placeholder="Your Skills"
              required
            />

            <FormGroup className="butmar">
              <Button
                style={{
                  fontSize: "17px",
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
                Submit
              </Button>
            </FormGroup>
          </AvForm>
        </div>
      </div>
    );
  }
}

export default VolunteerReg;
