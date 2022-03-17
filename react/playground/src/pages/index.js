import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';

const Index = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Route>
    </Routes>
  );
};

export default Index;
