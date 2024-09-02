import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.css";
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
        <Link to="/">MyLogo</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/all-events">All-Event</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
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
