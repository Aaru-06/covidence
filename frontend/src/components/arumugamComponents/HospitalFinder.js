import React, { Component } from "react";
import { GOOGLE_MAPS_API_KEY } from "../../constants/apiKey";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import HeaderView from "../vbjComponents/HeaderView";
import SideNavBar from "./SideNavBar";

class HospitalFinder extends Component {
  constructor() {
    super();
    this.googleMapStyle = {
      height: `calc(100vh - 170px)`,
      position: "absolute",
    };

    this.state = {
      location: undefined,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) =>
      this.setState({ location: position })
    );
  }

  render() {
    return (
      <div style={{ height: `100vh` }}>
        <HeaderView name="MapServices" />
        <SideNavBar history={this.props.history} />
        <Map
          ContainerStyle={this.googleMapStyle}
          style={this.googleMapStyle}
          google={this.props.google}
          zoom={14}
          center={
            this.state.location
              ? {
                  lat: this.state.location.coords.latitude,
                  lng: this.state.location.coords.longitude,
                }
              : undefined
          }
        >
          <Marker
            position={
              this.state.location
                ? {
                    lat: this.state.location.coords.latitude,
                    lng: this.state.location.coords.longitude,
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
    );
  }
}
export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_API_KEY,
})(HospitalFinder);
