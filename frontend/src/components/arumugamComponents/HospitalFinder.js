import React, { Component } from "react";
import { GOOGLE_MAPS_API_KEY } from "../../constants/apiKey";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import HeaderView from "../vbjComponents/HeaderView";
import SideNavBar from "./SideNavBar";
import "./styles/hospitalfinder/hospitalfinder-style.css";

class HospitalFinder extends Component {
  constructor() {
    super();
    this.state = {
      location: undefined,
    };

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
      let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${GOOGLE_MAPS_API_KEY}&type=hospital&location=${this.state.location.latitude},${this.state.location.longitude}&rankby=distance`;
      
      fetch(url)
        .then((data)=>{ console.log(data);return data.json()})
        .then((data)=>console.log(data))
        .catch((err)=>console.log(err));
  
  }

  render() {
    return (
      <div>
        <HeaderView name="MapServices" />
        <SideNavBar history={this.props.history} />
        <div className="flex-container">
          <div className="flex-item">
            <button type="button" onClick={this.handleClick} disabled={this.state.location===undefined?true:false}>click</button>
          </div>
          <div className="flex-item">
         <Map
          style={{width:"50vw",height:"80vh"}}
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
          />
          <InfoWindow onClose={this.onInfoWindowClose} visible={true}>
            <div>
              <h1>testing</h1>
            </div>
          </InfoWindow>
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
