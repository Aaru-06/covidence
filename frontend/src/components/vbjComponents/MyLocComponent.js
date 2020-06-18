import React,{Component} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import "../../constants/apiKey";

const mapStyles = {
    width: '100%',
    height: '100%'
};


export class MyLocComponent extends Component{
    render(){
        return(
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: -1.2884,
                    lng: 36.8233
                }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'GOOGLE_MAPS_API_KEY'
})(MyLocComponent);