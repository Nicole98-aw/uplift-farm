import React from 'react';
import { NavLink } from 'react-router-dom';

class PriNav extends React.Component {
  render() {
    return (
      <div>
        <div>
          <nav className='navbar navbar-expand-lg navbar-dark bg-light'>
            <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
              <NavLink className='navbar-brand' to='#'>
                Uplift Farmers
              </NavLink>
              <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/dashboard'>
                    Dashboard
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/farmers'>
                    Farmers
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/buyers'>
                    Buyers
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/farmexp'>
                    Farming experts
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default PriNav;
