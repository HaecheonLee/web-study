import PropTypes from 'prop-types';

const MyComponent = ({ name, favouriteNumber, children }) => {
  return (
    <div>
      Hello, This is my name, {name} <br/>
      Children is {children} <br/>
      My favouriteNumber is {favouriteNumber}
    </div>
  )
}

MyComponent.defaultProps = {
  name: 'Default Name',
  children: 'Default Children',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favouriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
