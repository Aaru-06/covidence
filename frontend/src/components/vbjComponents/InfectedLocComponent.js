import React, { useState, useEffect, Component } from "react";
import firebase from "../../config/firebase";
import Header from "./HeaderView";
import "./styles/styles.css";
import SideNavBar from "../arumugamComponents/SideNavBar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Infected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infect: "",
      address: "",
    };
  }

  componentDidMount() {
    let address = [];
    let infectedloc = this;
    let ref = firebase.database().ref();
    ref.child("Infected").on("value", (snapshot) => {
      // if (snapshot.child("addr").val != null) {
      //   setInfect({
      //     ...snapshot.child("addr").val,
      //   });
      // }
      snapshot.forEach(function (childSnapshot) {
        //Here you can access  childSnapshot.key
        childSnapshot.forEach((snap) => {
          console.log(snap.child("addr").val());
          console.log(snap.child("dateAndTime").val());
          address.push(snap.child("addr").val());

          infectedloc.setState({
            infect: snap.child("dateAndTime").val(),
            address: snap.child("addr").val(),
          });
        });
      });
    });
    console.log(address);
    console.log(this.state.address);
    console.log(this.state.infect);
  }

  render() {
    return (
      <>
        <Header name="Infected Location" />
        <SideNavBar history={this.props.history} />
        <div className="row"></div>
      </>
    );
  }
}

export default Infected;
