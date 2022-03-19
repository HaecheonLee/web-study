import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Index from './pages/index';
import CounterContainer from './containers/CounterContainer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
      <hr/>
      <CounterContainer />
    </div>
  );
};

export default App;
