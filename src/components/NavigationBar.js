import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from './ToggleButton';

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ToggleButton />
    </nav>
  );
}

export default NavigationBar;
