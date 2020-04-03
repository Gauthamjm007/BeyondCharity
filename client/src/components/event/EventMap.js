import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { GOOGLE_KEY } from "../../key";
import React, { Component } from "react";
export class MapContainer extends Component {
  render() {
    const style = {
      borderRadius: "20px",
      width: "30%",
      height: "35vh"
    };
    return (
      <Map google={this.props.google} zoom={14} style={style}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_KEY
})(MapContainer);
