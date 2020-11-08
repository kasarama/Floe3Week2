import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <ul className="header">
      <li>
        <NavLink activeClassName="selected" exact to="/">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink exact activeClassName="selected" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/dashbord">
          Dashbord
        </NavLink>
      </li>
      
    </ul>
  );
}
