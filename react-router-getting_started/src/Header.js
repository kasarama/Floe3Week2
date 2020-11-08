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
        <NavLink activeClassName="selected" exact to="/day1and2">
          Day 1 and 2
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/day2">
          Day 2
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/forms">
          Day 3 - forms
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/lift">
          Day 3 - lift state up
        </NavLink>
      </li>
    </ul>
  );
}
