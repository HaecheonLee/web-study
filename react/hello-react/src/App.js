import React, { Component } from 'react';
import ValidationSample from './Ch5/ValidationSample.js';
import ScrollBox from './Ch5/ScrollBox.js';
import IterationSample from './Ch6/IterationSample.js';

class App extends Component {
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
