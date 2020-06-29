import React, { Component } from "react";
import "./styles/dashboard/dashboard-style.css";


class DashboardModuleComponent extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    const name = event.target.id;
    console.log(name);
    if (name == "logout") {
      this.props.history.push("/");
    } else {
      this.props.history.push(`/${name}`);
    }
  }
  render() {
    return (
      <div
        className="moduleComponent"
        id={this.props.name}
        onClick={this.clickHandler}
      >
        {this.props.name}
      </div>
    );
  }
}

export default DashboardModuleComponent;
