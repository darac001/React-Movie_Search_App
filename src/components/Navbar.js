import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="logo" className="logo"></img>
          </Link>
          <p>powered by OMDb API</p>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
