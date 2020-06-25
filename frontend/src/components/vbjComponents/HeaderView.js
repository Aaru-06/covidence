import React from "react";
import { Jumbotron } from "reactstrap";
import image from "../../images/covid191.jpeg";
const Header = (props) => {
  return (
    <Jumbotron className="jumbotron">
      <div className="row row-header">
        <div className="col-12 col-sm-1">
          <img
            src={image}
            width="100px"
            height="auto"
            alt="heros"
            style={{ borderRadius: "30px" }}
          ></img>
        </div>
        <div className="col-12 col-sm-10">
          <h1 id="h1" style={{ marginLeft: "50px", marginTop: "10px" }}>
            {props.name}
          </h1>
          <p></p>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Header;
