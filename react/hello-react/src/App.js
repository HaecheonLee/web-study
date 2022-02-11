import './App.css';
import MyComponent from './MyComponent';
import MyComponent2 from './MyComponent2';
import Counter from './Counter';
import Say from './Say';

const App = () => {
  return (
    <>
      <MyComponent name="React" favouriteNumber={1} />
      <br/>
      <MyComponent2 name="React2" favouriteNumber={25} />
      <br/>
      <Counter />
      <br/>
      <Say />
      <br/>
    </>
  );
}

export default App;
