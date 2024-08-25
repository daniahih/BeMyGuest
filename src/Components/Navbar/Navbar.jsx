import { Link } from 'react-router-dom'
import './NavBar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          {' '}
          <img
            src="/public/logo14-removebg-preview.png"
            alt="Logo"
            className="logo-image"
          />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/all-events">All-Event</Link>
        </li>
        <li>
          <Link to="/about">About US</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
