/* with class */
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   state = {
//     SplitMe: null
//   };
//
//   handleClick = async() => {
//     const loadedModule = await import('./SplitMe');
//     this.setState({
//       SplitMe: loadedModule.default
//     });
//   };
//
//   render() {
//     const { SplitMe } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p onClick={this.handleClick}>Hello React</p>
//           { SplitMe && <SplitMe /> }
//         </header>
//       </div>
//     );
//   }
// }
//
// export default App;

/* with React.lazy & Suspense */
// import React, { useState, Suspense } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// const SplitMe = React.lazy(() => import('./SplitMe'));
//
// function App() {
//   const [visible, setVisible] = useState(false);
//   const onClick = () => {
//     setVisible(true);
//   };
//
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p onClick={onClick}>Hello React</p>
//         <Suspense fallback={<div>loading...</div>}>
//           { visible && <SplitMe /> }
//         </Suspense>
//       </header>
//     </div>
//   );
// }
//
// export default App;


/* with @loadable/component */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';

const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
        { visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
