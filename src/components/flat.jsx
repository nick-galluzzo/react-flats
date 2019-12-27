import React from 'react';

export default class Flat extends React.Component {
  getStyle = () => {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.imageUrl})`
    };
  }

  handleClick = () => {
    this.props.selectFlat(this.props.index);
  }

  render() {
    const { name, price, priceCurrency, active } = this.props;
    return (
      <div className={`card ${active ? ' active' : ''}`} style={this.getStyle()}>
        <div className="card-category">{`${price} ${priceCurrency}`}</div>
        <div className="card-description">
            <h2>{name}</h2>
          </div>
        <a className="card-link" href="#" onMouseEnter={this.handleClick}></a>
        </div>
    );
  }
}
