import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // go to previous page
    navigate(-1);
  };

  const goArticles = () => {
    // go to /articles
    navigate('/articles', { replace: true });
  }

  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>Go back</button>
        <button onClick={goArticles}>List of articles</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
