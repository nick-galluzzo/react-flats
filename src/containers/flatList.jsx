import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { listFlats } from '../actions/flatActions';
import Flat from './flat';

class FlatList extends React.Component {

  componentDidMount() {
    this.props.listFlats();
  }

  renderList() {
    const { flats, selectedFlat } = this.props;
    const data = Array.from(flats);
    return data.map((flat) => <Flat flat={flat} key={flat.name} />);
  }

  render() {
    return (
      <div className='flat-list'>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  flats: state.flats
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ listFlats }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);


// export default class FlatList extends React.Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { flats } = this.props;

//     return (
//       <div className="flat-list">
//         {flats.map(({ name, imageUrl, price, priceCurrency, lat, lng}, index) => {
//           return ( <Flat
//             index={index}
//             name={name}
//             key={lat}
//             imageUrl={imageUrl}
//             price={price}
//             priceCurrency={priceCurrency}
//             selectFlat={this.props.selectFlat}
//             active={name === this.props.selectedFlat.name}
//             />
//           );
//         })
//       }
//     </div>
//   );
// }
// }
