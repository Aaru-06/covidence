import React from "react";
import { Link, Route } from "react-router-dom";
import { Jumbotron, Button } from "reactstrap";
import * as ROUTES from "../../constants/routes";
// import "../../App.css";
import "./styles/style1.css";
import Header from "./HeaderView";
import SideNavBar from "../arumugamComponents/SideNavBar";
import i2 from "../../images/world.jfif";
import image from "../../images/covid191.jpeg";

const Landing = () => {
  return (
    <div>
      {/* <Jumbotron className="jumbotron">
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-12">
              <h1>
                <span className="book header">COVID</span>
                <span className="header">ENCE</span>
              </h1>
            </div>
          </div>
        </div>
      </Jumbotron> */}
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <span>
            <img
              src={image}
              width="75vh"
              height="75vh"
              alt="Heros"
              style={{
                width: "85px",
                marginTop: "-20px",
                borderRadius: "50%",
                marginLeft: "20px",
              }}
            ></img>
            <h1 class="display-4">
              <span className="book header">COVID</span>
              <span className="header">ENCE</span>
            </h1>
          </span>
        </div>
      </div>
      {/* <div className="container">
        <div className="alignhome">
          <h1 style={{ marginBottom: "20px" }}>Click Here to Sign In</h1>
          <Link to={ROUTES.SIGN_IN}>
            <Button variant="contained" color="primary">
              SIGN IN
            </Button>
          </Link>
        </div>
      </div> */}

      <div className="row">
        <div className="col-12 col-sm-6">
          <img className="im" src={i2} width="95%" height="95%"></img>
        </div>
        <div className="col-12 col-sm-6">
          <blockquote>
            <pre>
              <h2 className="h2i">"This isn't forever</h2>
              <h2 className="h2r">It's just right now.. "</h2>
            </pre>
          </blockquote>
          <div className="container">
            <Link to={ROUTES.SIGN_IN}>
              <Button color="primary" outline="none" size="btn-lg" block>
                SIGN IN
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
