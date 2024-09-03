import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            src="/logo14-removebg-preview.png" // Corrected path
            alt="Logo"
            className="logo-image"
          />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/all-events">All-EVENTS</Link>
        </li>
        <li>
          <Link to="/about">ABOUT-US</Link>
        </li>
        <li>
          <Link to="/loginPage">LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
