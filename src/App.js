import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDygGwTT_ShpZTg2mTWJ5EF2LBsK2B7AZA&callback=initMap"
  type="text/javascript"></script>

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
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'GOOGLE_API_KEY'
})(MapContainer);

