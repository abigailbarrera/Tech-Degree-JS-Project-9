import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to='/mountains'>Mountains</NavLink></li>
      <li><NavLink to='/lions'>Lions</NavLink></li>
      <li><NavLink to='/donuts'>Donuts</NavLink></li>
      <li><NavLink to='/search'>Search</NavLink></li>
    </ul>
  </nav>
)

export default Header;