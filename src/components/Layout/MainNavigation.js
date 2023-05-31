import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <div className="classes.logo">React Auth</div>
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/auth">Auth</NavLink>
          </li>

          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
