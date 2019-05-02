import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
	  <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
  type="text/javascript"></script>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'GOOGLE_API_KEY'
})(MapContainer);

