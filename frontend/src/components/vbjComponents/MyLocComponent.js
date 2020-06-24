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
class MyLoc extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header name="MyLocation" />
        <SideNavBar />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="myloch2">{this.props.key}</h1>
              <AvForm onSubmit={this.handleSubmit}>
                <div>
                  <AvCheckboxGroup
                    inline
                    required
                    className="out"
                    id="doncheck"
                    errorMessage="Pick one ..!!"
                    name="doncheck"
                    validate={{ min: { value: 1 } }}
                  >
                    <div className="row">
                      <AvCheckbox
                        className="out"
                        type="checkbox"
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
                </div>
              </AvForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyLoc;
