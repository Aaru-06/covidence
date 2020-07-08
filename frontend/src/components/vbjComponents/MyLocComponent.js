import React, { Component } from "react";
import Header from "./HeaderView";
import SideNavBar from "../arumugamComponents/SideNavBar";
import {
  AvForm,
  AvCheckboxGroup,
  AvCheckbox,
} from "availity-reactstrap-validation";
import error from "../../images/404.jpeg";
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
      disable: false,
      disable1: true,
      loc: null,
    };
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleLoc = this.handleLoc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePrev(event) {
    this.setState({
      disable: false,
      disable1: true,
    });
  }

  handleNext(event) {
    this.setState({
      disable: true,
      disable1: false,
    });
  }

  handleLoc(event) {
    this.setState({
      loc: "hello",
    });
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
    var user = firebase.auth().currentUser;
    var sliceKey;
    if (this.state.loc == null) {
      window.alert("Your location history is private");
    } else {
      if (user != null) {
        sliceKey = user.uid;
        let ref = firebase.database().ref("Infected");

        console.log(address);

        if (errors.length === 0) {
          ref.child(sliceKey.toString()).push({
            addr: address,
            dateAndTime: `${new Date().toUTCString()}`,
          });
        }
        window.alert("Your location history is set public..");
      }
    }
  }

  render() {
    console.log(this.state.userKey);
    console.log(this.state.loc);
    console.log(localStorage.getItem("snapKey"));
    var user = firebase.auth().currentUser;
    var sliceKey;
    if (user == null) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-12 col-sm-6">
              <p className="pp">Kindly wait for few seconds</p>
              <img src={error} width="100%" height="100%"></img>
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>
      );
    } else {
      var myLocKey = localStorage.getItem("snapKey");
      sliceKey = user.uid;
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
          <SideNavBar history={this.props.history} />
          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>

              <h1 className="myloch2">{this.props.key}</h1>
              <AvForm onSubmit={this.handleSubmit}>
                <AvCheckboxGroup
                  inline
                  required
                  id="doncheck"
                  name="doncheck"
                  validate={{ min: { value: 1 } }}
                >
                  <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-12 col-sm-6">
                      <div
                        className="card"
                        style={{ width: "100%" }}
                        hidden={this.state.disable}
                      >
                        <img
                          class="card-img-top"
                          src="https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                          alt="Covid"
                        ></img>

                        <div className="card-body">
                          <AvCheckbox
                            type="checkbox"
                            label="Are you infected by Covid?"
                            name="infect"
                          />
                          <Button
                            color="danger"
                            outline="none"
                            onClick={this.handleNext}
                            size="btn-lg"
                            block
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                      <div
                        className="card"
                        style={{ width: "100%" }}
                        hidden={this.state.disable1}
                      >
                        <img
                          class="card-img-top"
                          src="https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                          alt="Covid"
                        ></img>
                        <div className="card-body">
                          <AvCheckbox
                            onClick={this.handleLoc}
                            className="out"
                            type="checkbox"
                            label="Set your location history as public"
                            name="public"
                          />
                          <Button
                            color="danger"
                            outline="none"
                            onClick={this.handlePrev}
                            size="btn-lg"
                            block
                          >
                            Previous
                          </Button>
                          <FormGroup>
                            <Button
                              color="danger"
                              outline="none"
                              size="btn-lg"
                              block
                            >
                              <i
                                class="fa fa-user-circle-o"
                                aria-hidden="true"
                                style={{ marginRight: "7px" }}
                              ></i>
                              Submit
                            </Button>
                          </FormGroup>
                        </div>
                      </div>
                    </div>
                  </div>
                </AvCheckboxGroup>
              </AvForm>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      );
    }
  }
}

export default MyLoc;
