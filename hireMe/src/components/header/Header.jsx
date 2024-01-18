// Header.js

import { Link } from 'react-router-dom';
import './header.css';
import logoSvg from '../../assets/Logo.svg';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logoSvg} alt="Logo" />
      </Link>
      <nav>
        <ul>
          <li><Link className='a' to="/">Home</Link></li>
          <li><Link  className='a' to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
