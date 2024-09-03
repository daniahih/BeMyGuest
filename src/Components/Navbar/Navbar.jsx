import { Link } from "react-router-dom";
import "./NavBar.css";
import { useEffect, useState } from "react";
import { auth } from "../../firebase_setup/firebase";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user); // Set isLoggedIn to true if a user is logged in
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

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
        {isLoggedIn ? (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        ) : (
          <li>
            <Link to="/loginPage">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
