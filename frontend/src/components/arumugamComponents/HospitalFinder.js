import React, { Component } from "react"
import {GOOGLE_MAPS_API_KEY} from "../../constants/apiKey"
import { Map , GoogleApiWrapper , Marker } from "google-maps-react"
import HeaderView from "../vbjComponents/HeaderView"
import SideNavBar from "./SideNavBar"

class HospitalFinder extends Component{
    constructor(){
        super()
        this.googleMapStyle = {
            height : `calc(100vh - 170px)`
        }
    }
    
    render(){
        return(
            <div style={{height : `100vh`}}>
                <HeaderView name="MapServices"/>
                <SideNavBar history={this.props.history}/>
                <Map
                    style = {this.googleMapStyle}
                    google = {this.props.google}
                    zoom={14}
                >
                    <Marker position={{lat:13.01,lng:79.1}}/>
                </Map>
            </div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey : GOOGLE_MAPS_API_KEY
})(HospitalFinder);