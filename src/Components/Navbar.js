import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-light'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='#'>
          Uplift Farmers
        </NavLink>

        <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/about'>
              About
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/contact'>
              Contact
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/signup'>
              Sign Up
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/login'>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
