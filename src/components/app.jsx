import React from 'react';
import GoogleMapReact from 'google-map-react';
import FlatList from './flatList';
import Marker from './marker';
import flats from '../../data/flats';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: flats[0]
    };
  }

  componentWillMount() {
    if (!this.state.lat || !this.state.lng) {
      this.setState({ lat: this.state.selectedFlat.lat });
      this.setState ({ lng: this.state.selectedFlat.lng });
    }

    if (!this.state.selectedFlat) {
      this.setState({ selectedFlat: this.state.flats[0] });
    }
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: this.state.flats[index] });
  }

  render() {
    return (
        <div>
          <FlatList
            flats={this.state.flats}
            selectFlat={this.selectFlat}
            selectedFlat={this.state.selectedFlat}
          />
          <div className="map-container">
            <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
              <Marker
                lat={this.state.selectedFlat.lat}
                lng={this.state.selectedFlat.lng}
              />
            </GoogleMapReact>
          </div>
        </div>

    );
  }
}
