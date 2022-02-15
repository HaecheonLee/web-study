import React, { Component } from 'react';
import ValidationSample from './ValidationSample.js';
import ScrollBox from './ScrollBox.js';

class App extends Component {
  render() {
    return (
      <div>
        <ValidationSample />
        <br/>
        <ScrollBox ref={(ref) => { this.scrollBox = ref }} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          To the bottom
        </button>
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
