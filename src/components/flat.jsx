import React from 'react';

export default class Flat extends React.Component {
  getStyle = () => {
    return {
      backgroundImage: `url(${this.props.imageUrl})`
    };
  }

  render() {
    const { name, imageUrl, price, priceCurrency, lat, lng } = this.props;
    return (
        <div className="card" style={this.getStyle()}>
          <div className="card-category">{`${price} ${priceCurrency}`}</div>
          <div className="card-description">
            <h2>{name}</h2>
          </div>
        <a className="card-link" href="#"></a>
        </div>
    );
  }
}
