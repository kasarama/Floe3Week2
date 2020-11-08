import { NavLink } from "react-router-dom";
export default function Header({ loginStatus, updateLogin }) {
  const logout = () => updateLogin(2);
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/products">
          Products
        </NavLink>
      </li>

      {loginStatus ? (
        <li>
          <NavLink activeClassName="active" to="/add-book">
            Add Book
          </NavLink>
        </li>
      ) : (
        ""
      )}

      <li>
        <NavLink activeClassName="active" to="/company">
          Company
        </NavLink>
      </li>

      {loginStatus ? (
        <li>
          <NavLink activeClassName="active" to="/find-book">
            Find Book
          </NavLink>
        </li>
      ) : (
        ""
      )}
      {!loginStatus ? (
        <li>
          <NavLink activeClassName="active" to="/login">
            Log in
          </NavLink>
        </li>
      ) : (
        ""
      )}
      {loginStatus ? (
        <button className="active" onClick={logout}>
          Log out
        </button>
      ) : (
        ""
      )}
    </ul>
  );
}
