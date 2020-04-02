import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import Geocode from "react-geocode";
import { GOOGLE_KEY } from "../../key";
Geocode.setApiKey(GOOGLE_KEY);
Geocode.setLanguage("en");
Geocode.setRegion("es");
Geocode.enableDebug();

class MarkMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      lng: null,
      markers: []
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) =>
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    );
  }

  mapClicked = (event) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
    const { markers } = this.state;
    this.setState({
      markers: [
        {
          position: event.latLng,
          key: Date.now(),
          defaultAnimation: 2
        },
        ...markers
      ]
    });
    console.log(markers);
  };

  onMarkerDragEnd = (coord) => {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    Geocode.fromLatLng(String(lat), String(lng)).then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log(address);
        this.props.sendData(lat, lng, address);
      },
      (error) => {
        console.error(error);
      }
    );

    this.setState({
      lat: lat,
      lng: lng
    });

    console.log(lat, lng);
  };

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    const style = {
      borderRadius: "20px",
      width: "30%",
      height: "40vh"
    };
    return (
      <Map
        google={this.props.google}
        zoom={11}
        style={style}
        initialCenter={{
          lat: this.state.lat,
          lng: this.state.lng
        }}
        center={{
          lat: this.state.lat,
          lng: this.state.lng
        }}
        onClick={this.mapClicked}
      >
        <Marker
          title={"Geolocation"}
          onClick={this.onMarkerClick}
          position={{
            lat: this.state.lat,
            lng: this.state.lng
          }}
          draggable={true}
          onDragend={(t, map, coord) => this.onMarkerDragEnd(coord)}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_KEY
})(MarkMap);
