import React, { Component } from 'react';
import '../Counter.css';

class Button extends Component {
  render() {
    return (
      <button className='btn' style={{ background: this.props.background }}>
        {this.props.name}
      </button>
    );
  }
}

export default Button;
