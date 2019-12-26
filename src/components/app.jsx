import React from 'react';
import FlatList from './flatList';
import MapObject from './map';
import flats from '../../data/flats';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats
    };
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={this.state.flats}/>
        </div>
        <div className="map-container">
         <MapObject />
        </div>
      </div>
    );
  }
}
