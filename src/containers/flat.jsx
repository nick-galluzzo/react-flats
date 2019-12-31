import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectFlat } from '../actions/flatActions';

class Flat extends React.Component {
  getStyle = () => {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.flat.imageUrl})`
    };
  }

  handleClick = (flat) => {
    // console.log(flat);
    this.props.selectFlat(flat);
  }

  render() {
    const { flat } = this.props;

    return (
      <div className={`card ${flat === this.props.selectedFlat ? ' active' : ''}`} style={this.getStyle()}>
        <div className="card-category">{`${flat.price} ${flat.priceCurrency}`}</div>
        <div className="card-description">
            <h2>{flat.name}</h2>
          </div>
        <a className="card-link" href="#" onClick={() => this.handleClick(flat)}></a>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectFlat }, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat);
