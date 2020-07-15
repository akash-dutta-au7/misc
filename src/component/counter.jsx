import React, { Component } from 'react';
import '../Counter.css';
import Button from './Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementNumber } from '../redux/actions';

class counter extends Component {
  render() {
    console.log('From the props', this.props);
    return (
      <div className='Counter'>
        <h3>{this.props.number}</h3>
        <Button
          name={'Increment'}
          onClick={() => this.props.incrementNumber(this.props.number)}
        />
        <Button name={'Decrement'} background={'red'} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Map state to props', state);
  return {
    number: state.number,
  };
};

const mapDispatchToProps = (dispatch) => {
  // return bindActionCreators({ incrementNumber }, dispatch);
  return {
    onClickCounter: () => {
      dispatch(incrementNumber);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(counter);
