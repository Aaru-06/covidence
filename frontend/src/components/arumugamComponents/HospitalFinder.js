import React, { Component } from "react";
import { GOOGLE_MAPS_API_KEY , TOM_TOM_API_KEY } from "../../constants/apiKey";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import {Button} from "reactstrap";
import DetailCard from "./DetailCard";
import HeaderView from "../vbjComponents/HeaderView";
import SideNavBar from "./SideNavBar";
import "./styles/hospitalfinder/hospitalfinder-style.css";

class HospitalFinder extends Component {
  constructor() {
    super();
    this.state = {
      location: undefined,
      results : undefined
    };

    this.dummy=["hey","hlaskfs","asfjasfl;asf","faskfjlsf","slkfjsdfs","djflsafs","afjaslfs"];

    this.handleClick = this.handleClick.bind(this); 

  }

  componentDidMount() {
    
      let options = {
        enableHighAccuracy : true,
        maximumAge : 0,
        timeout : 1000
    };

    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ location: {
        latitude : position.coords.latitude,
        longitude : position.coords.longitude
      } });
      console.log(`location  : ${position.coords.latitude},${position.coords.longitude}`);
      console.log(`accuracy : ${position.coords.accuracy}`);
    } ,
      (err) => {
        console.log(err);
      },
      options
    );

  }

  handleClick(event){
      let url = `https://api.tomtom.com/search/2/nearbySearch/.json?lat=${this.state.location.latitude}&lon=${this.state.location.longitude}&idxSet=POI&categorySet=7321&key=${TOM_TOM_API_KEY}`;

      console.log("pinged at ",url);
      
      fetch(url)
        .then(data=> data.json())
        .then(data=>{
            const {results} = data;
            this.setState({
              results : results
            },()=>{console.log("state set");});
        })
        .catch((err)=>console.log(err));
  }

  render() {

    console.log(this.state.results);

    return (
      <div>
        <HeaderView name="MapServices" />
        <SideNavBar history={this.props.history} />
        <div className="flex-container">
          <div className="flex-item">
              <div
                style={{display:"flex",flexFlow:"column nowrap", height:"100%",width:"100%" , overflow : "scroll"}}
              >
                {
                  this.state.results===undefined ? null : this.state.results.map((obj,index)=><DetailCard data={obj} key={index} />)
                }
              </div>
            <div className="hospital-finder-btn">
              <Button 
                color="primary" 
                disabled={this.state.location===undefined?true:false}
                onClick={this.handleClick}
              >
                Find Hospitals
              </Button>
            </div>
          </div>
          <div className="flex-item-map">
         <Map
          style={{width:"75vw",height:"80vh"}}
          google={this.props.google}
          zoom={14}
          center={
            this.state.location
              ? {
                  lat: this.state.location.latitude,
                  lng: this.state.location.longitude,
                }
              : undefined
          }
        >
          <Marker
            position={
              this.state.location
                ? {
                    lat: this.state.location.latitude,
                    lng: this.state.location.longitude,
                  }
                : undefined
            }
            title = "My Location"
            onClick={(event)=>{window.alert("my location")}}
          />
          {
            this.state.results?this.state.results.map((res)=>{ 
              return <Marker position={{lat : res.position.lat , lng : res.position.lon}}/>;
            }) : console.log("null")
          }
        </Map>
        </div>
      </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_API_KEY,
})(HospitalFinder);
