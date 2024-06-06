import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/havnar" activeClassName="active">Havnar</NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register" activeClassName="active">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
