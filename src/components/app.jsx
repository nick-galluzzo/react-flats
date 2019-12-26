import React from 'react';
import FlatList from './flatList';
import MapObject from './map';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList />
        </div>
        <div className="map-container">
         <MapObject />
        </div>
      </div>
    );
  }
}
