import { NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <li><ArticleItem id={1} /></li>
        <li><ArticleItem id={2} /></li>
        <li><ArticleItem id={3} /></li>
      </ul>
    </div>
  );
}

const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };

  return (
    <li>
      <NavLink to={`/articles/${id}`}
               style={( { isActive }) => (isActive ? activeStyle : undefined )}
      >
        Article {id}
      </NavLink>
    </li>
  );
}

export default Articles;
