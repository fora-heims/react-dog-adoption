import './Header.css';
import { NavLink } from 'react-router-dom';

import React from 'react';

export default function Header() {
  return (
    <header>
      <NavLink to="/" className="navigate">
        Home
      </NavLink>
      <NavLink to="/admin" className="navigate">
        Admin
      </NavLink>
    </header>
  );
}
