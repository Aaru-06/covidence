import React, { useState, useEffect } from "react";
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

const Infected = (props) => {
  var [infect, setInfect] = useState("");
  var address = [];
  useEffect(() => {
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
          address.push(snap.child("addr").val());
          setInfect({ ...snap.child("dateAndTime").val() });
        });
      });
    });
  }, []);
  console.log(address);
  console.log(infect);

  return (
    <>
      <Header name="Infected Location" />
      <SideNavBar history={props.history} />
      <div className="row"></div>
    </>
  );
};

export default Infected;
