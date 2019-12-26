import React from 'react';
import FlatList from './flatList';
import MapObject from './marker';
import flats from '../../data/flats';
import GoogleMapReact from 'google-map-react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
      lat: 28.5,
      lng: -81.3
    };
  }

  center() {
      return {
        lat: this.state.lat,
        lng: this.state.lng
      };
    }

  render() {
    return (
        <div>
          <FlatList flats={this.state.flats}/>
        <div className="map-container">
           <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
           </GoogleMapReact>
         </div>
         </div>

    );
  }
}
