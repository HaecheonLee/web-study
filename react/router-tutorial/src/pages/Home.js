import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is home page</p>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profiles/dev1">dev1's profile</Link>
        </li>
        <li>
          <Link to="/profiles/dev2">dev2's profile</Link>
        </li>
        <li>
          <Link to="/profiles/void">Unknown profile</Link>
        </li>
        <li>
          <Link to="/articles">List of articles</Link>
        </li>
      </ul>
    </div>
  )
};

export default Home;
