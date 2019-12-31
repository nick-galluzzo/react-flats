import React from 'react';
import FlatList from '../containers/flatList';
import Map from '../containers/map';


const App = () => {
  return (
    <div>
      <FlatList />
      <Map />
    </div>
  );
};

export default App;

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       flats,
//       selectedFlat: flats[0]
//     };
//   }

//   selectFlat = (index) => {
//     this.setState({ selectedFlat: this.state.flats[index] });
//   }

//   center() {
//     return {
//       lat: this.state.selectedFlat.lat,
//       lng: this.state.selectedFlat.lng
//     };
//   }


//   render() {
//     return (
//       <div>
//         <FlatList
//           flats={this.state.flats}
//           selectFlat={this.selectFlat}
//           selectedFlat={this.state.selectedFlat}
//         />
//         <div className="map-container">
//           <GoogleMapReact center={this.center()} defaultZoom={12}>
//             <Marker
//               lat={this.state.selectedFlat.lat}
//               lng={this.state.selectedFlat.lng}
//             />
//           </GoogleMapReact>
//         </div>
//       </div>
//     );
//   }
// }
