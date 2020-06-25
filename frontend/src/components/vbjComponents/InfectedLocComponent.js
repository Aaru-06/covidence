import React, { Component } from "react";
import Header from "../vbjComponents/HeaderView";

class InfectedLoc extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header name="Infected" />
      </div>
    );
  }
}

export default InfectedLoc;
