import React, { Component } from "react";
import Header from "./HeaderView";
import SideNavBar from "../arumugamComponents/SideNavBar";
import {
  AvForm,
  AvCheckboxGroup,
  AvCheckbox,
} from "availity-reactstrap-validation";
import { Button, FormGroup } from "reactstrap";
import "../../App.css";
import "./styles/styles.css";
import firebase from "../../config/firebase";
var address;
class MyLoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userKey: {},
    };
  }

  componentDidMount() {
    let ref = firebase.database().ref();
    ref.child("users").on("value", (snapshot) => {
      if (snapshot.val() != null)
        this.setState({
          userKey: snapshot.val(),
        });
    });
  }

  handleSubmit(event, errors, values) {
    event.preventDefault();

    var myLocKey = localStorage.getItem("snapKey");
    var sliceKey = firebase.auth().currentUser.uid;
    let ref = firebase.database().ref("Infected");

    console.log(address);

    if (errors.length === 0) {
      ref.child(sliceKey.toString()).push({
        addr: address,
        dateAndTime: `${new Date().toUTCString()}`,
      });
    }
  }

  render() {
    console.log(firebase.auth().currentUser.uid);
    console.log(this.state.userKey);
    console.log(localStorage.getItem("snapKey"));

    var myLocKey = localStorage.getItem("snapKey");
    var sliceKey = firebase.auth().currentUser.uid;
    Object.keys(this.state.userKey).filter((id) => {
      if (id == sliceKey) {
        address = this.state.userKey[id].Address;
      }
    });
    console.log(sliceKey);
    console.log(address);
    return (
      <div>
        <Header name="MyLocation" />
        <SideNavBar />
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h1 className="myloch2">{this.props.key}</h1>
              <AvForm onSubmit={this.handleSubmit}>
                <div className="outt">
                  <AvCheckboxGroup
                    inline
                    required
                    id="doncheck"
                    errorMessage="Pick one ..!!"
                    name="doncheck"
                    validate={{ min: { value: 1 } }}
                  >
                    <div className="row">
                      <AvCheckbox
                        type="checkbox"
                        className="out"
                        label="Are you infected by Covid?"
                        name="infect"
                      />
                    </div>
                    <div className="row">
                      <AvCheckbox
                        className="out"
                        type="checkbox"
                        label="Set your location history as public"
                        name="public"
                      />
                    </div>
                  </AvCheckboxGroup>
                  <FormGroup>
                    <Button color="danger" outline="none">
                      <i
                        class="fa fa-user-circle-o"
                        aria-hidden="true"
                        style={{ marginRight: "7px" }}
                      ></i>
                      Register
                    </Button>
                  </FormGroup>
                </div>
              </AvForm>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyLoc;
