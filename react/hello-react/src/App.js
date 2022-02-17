import React, { Component } from 'react';
import ValidationSample from './Ch5/ValidationSample';
import ScrollBox from './Ch5/ScrollBox';
import IterationSample from './Ch6/IterationSample';
import LifeCycleSample from './Ch7/LifeCycleSample';
import ErrorBoundary from './Ch7/ErrorBoundary';

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  }

  render() {
    return (
      <div>
        <h4>Ch 5</h4>
        <ValidationSample />
        <br/>
        <ScrollBox ref={(ref) => { this.scrollBox = ref }} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          To the bottom
        </button>
        <br/>
        <h4>Ch 6</h4>
        <IterationSample />
        <br />
        <h4>Ch 7</h4>
        <button onClick={this.handleClick}>Randome Color</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;

// import './App.css';
// import MyComponent from './MyComponent';
// import MyComponent2 from './MyComponent2';
// import Counter from './Counter';
// import Say from './Say';
// import EventPractice from './EventPractice';
// import EventPracticeFunction from './EventPracticeFunction';
//
// const App = () => {
//   return (
//     <>
//       <MyComponent name="React" favouriteNumber={1} />
//       <br/>
//       <MyComponent2 name="React2" favouriteNumber={25} />
//       <br/>
//       <Counter />
//       <br/>
//       <Say />
//       <br/>
//       <EventPractice />
//       <br/>
//       <EventPracticeFunction />
//     </>
//   );
// }
//
// export default App;
