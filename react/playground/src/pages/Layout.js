import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
