import React, { useState, useEffect } from "react";
import firebase from "../../config/firebase";
import Header from "./HeaderView";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import "./styles/styles.css";
import SideNavBar from "../arumugamComponents/SideNavBar";

const TollFree = (props) => {
  var [tollInfo, setTollInfo] = useState({});

  useEffect(() => {
    let ref = firebase.database().ref();
    ref.child("toll-free").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setTollInfo({
          ...snapshot.val(),
        });
    });
  }, []);

  console.log(tollInfo);

  return (
    <>
      <Header name="Toll Free" />
      <SideNavBar history={props.history} />
      <div className="container tbg">
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Emergency and Landline Numbers
        </h2>

        <div className="row">
          <div className="col-12 ">
            <table className="table table-borderless table-stripped">
              <thead className="thead-light ">
                <tr>
                  <th>Districts/States</th>
                  <th>Emergency No</th>
                  <th>Landline No</th>
                </tr>
              </thead>
              {/* <PerfectScrollbar className="tbg"> */}
              <tbody>
                {Object.keys(tollInfo).map((id) => {
                  return (
                    <tr>
                      <td>{id}</td>
                      <td>{tollInfo[id].emergency}</td>
                      <td>{tollInfo[id].landline}</td>
                    </tr>
                  );
                })}
              </tbody>
              {/* </PerfectScrollbar> */}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TollFree;
