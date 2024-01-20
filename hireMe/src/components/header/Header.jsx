// Header.js

import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className={"header-logo"} src={"Logo.svg"} alt="Logo" />
      </Link>
      <nav>
        <ul>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
