import "./Nav.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="NavComponent">
      <ul>
        <NavLink
          to="/state"
          className={(nav) => (nav.isActive ? "nav-active" : undefined)}
        >
          <li>State</li>
        </NavLink>
        <NavLink
          to="/form"
          className={(nav) => (nav.isActive ? "nav-active" : undefined)}
        >
          <li>Formulaire</li>
        </NavLink>
      </ul>
    </div>
  );
}
