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

  componentWillMount() {
    if (!this.state.lat) {
      this.setState({lat: this.state.flats[0].lat});
      this.setState ({lng: this.state.flats[0].lng});
    }
  }

  setCoords = () => {
    this.setState({ lat: this.state.selectedFlat.lat });
    this.setState({ lng: this.state.selectedFlat.lng });
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
          <FlatList flats={this.state.flats} selectFlat={this.selectFlat}  />
          <div className="map-container">
            <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            </GoogleMapReact>
          </div>
        </div>

    );
  }
}
