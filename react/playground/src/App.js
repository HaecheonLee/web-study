import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Index from './pages/index';

const App = () => {
  return (
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  );
};

export default App;
