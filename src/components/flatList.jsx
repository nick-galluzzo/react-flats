import React from 'react';
import Flat from './flat';

export default class FlatList extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    const { flats } = this.props;

    return (
      <div className="flat-list">
        {flats.map(({ name, imageUrl, price, priceCurrency, lat, lng}, index) => {
          return <Flat
            index={index}
            name={name}
            imageUrl={imageUrl}
            price={price}
            priceCurrency={priceCurrency}
            lat={lat}
            lng={lng}
            selectFlat={this.props.selectFlat}
            />;
        })
      }
    </div>
  );
}
}
