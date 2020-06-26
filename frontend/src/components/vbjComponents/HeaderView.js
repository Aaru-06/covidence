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
            width="75vh"
            height="75vh"
            alt="heros"
            style={{width: '85px', marginTop: '-20px', borderRadius: "50%", marginLeft: '20px'}}
          ></img>
        </div>
        <div className="col-12 col-sm-10">
          <h1 id="h1" style={{ marginLeft: "35px", marginTop: "-5px" }}>
            {props.name}
          </h1>
          <p></p>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Header;
