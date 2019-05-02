import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <div><Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
	  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDygGwTT_ShpZTg2mTWJ5EF2LBsK2B7AZA&callback=initMap"
  type="text/javascript"></script></div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDH8GqouyvvwOlB8w6PxQtPuoSnZ3Cae4w'
})(MapContainer);
