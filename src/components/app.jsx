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
      lat: null,
      lng: null,
      selectedFlat: null
    };
  }

  selectFlat = (event) => {
    this.setState({selectedFlat: event});
  }

  setCoords = () => {
    if (this.state.lat === null) {
      this.setState({lat: 28.5});
      this.setState({lng: -81.3});
    }
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
          <FlatList flats={this.state.flats} selectFlat={this.selectFlat} coords={this.setCoords()} />
          <div className="map-container">
            <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            </GoogleMapReact>
          </div>
        </div>

    );
  }
}
