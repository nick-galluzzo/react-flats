import React from 'react';

export default class Flat extends React.Component {
  getStyle = () => {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.imageUrl})`
    };
  }

  handleClick = () => {
    this.props.selectFlat(this.props);
  }

  render() {
    const { name, price, priceCurrency, lat, lng } = this.props;
    return (
        <div className="card" style={this.getStyle()}>
          <div className="card-category">{`${price} ${priceCurrency}`}</div>
          <div className="card-description">
            <h2>{name}</h2>
          </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
        </div>
    );
  }
}
