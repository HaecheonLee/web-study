import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent2 extends Component {
  render() {
    const { name, favouriteNumber, children } = this.props;
    return (
      <div>
        Hello, This is my name, {name} <br/>
        Children is {children} <br/>
        My favouriteNumber is {favouriteNumber}
      </div>
    );
  }
}

MyComponent2.defaultProps = {
  name: 'Default Name2'
};

MyComponent2.propTypes = {
  name: PropTypes.string,
  favouriteNumber: PropTypes.number.isRequired,
};

export default MyComponent2;
