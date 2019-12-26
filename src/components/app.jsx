import React from 'react';
import GoogleMapReact from 'google-map-react';
import FlatList from './flatList';
import Marker from './marker';
import flats from '../../data/flats';


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

  componentWillMount() {
    if (!this.state.lat || !this.state.lng) {
      this.setState({lat: this.state.flats[0].lat});
      this.setState ({lng: this.state.flats[0].lng});
    }

    if (!this.state.selectedFlat) {
      this.setState({ selectedFlat: this.state.flats[0]})
    }
  }

  center() {
    return {
      lat: this.state.lat,
      lng: this.state.lng
    };
  }

  selectFlat = (event) => {
    this.setState({ selectedFlat: event });
    this.setState({ lat: event.lat });
    this.setState({ lng: event.lng });
  }


  render() {
    return (
        <div>
          <FlatList flats={this.state.flats} selectFlat={this.selectFlat}  />
          <div className="map-container">
            <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
              <Marker lat={this.state.lat} lng={this.state.lng} />
            </GoogleMapReact>
          </div>
        </div>

    );
  }
}
