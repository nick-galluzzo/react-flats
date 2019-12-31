import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

class Map extends Component {
  render() {
    let marker = null;
    let center = { lat: 48.856614, lng: 2.352222 };

    if (Object.entries(this.props.selectedFlat).length !== 0) {
      console.log('selected');
      marker = <div
        className="marker"
        lat={this.props.selectedFlat.lat}
        lng={this.props.selectedFlat.lng} />;
      center = { lat: this.props.selectedFlat.lat,
                 lng: this.props.selectedFlat.lng };
    }
    return (

       <div className="map-container" style={{height: '100vh'}}>
         <GoogleMapReact
           center={center}
           defaultZoom={12}>
           {marker}
       </GoogleMapReact>
      </div>
   );
  }
}

function mapStateToProps(state) {
  return { selectedFlat: state.selectedFlat };
}

export default connect(mapStateToProps)(Map);
