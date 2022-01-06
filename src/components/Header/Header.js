import './Header.css';
import { NavLink } from 'react-router-dom';

import React from 'react';

export default function Header() {
  return (
    <header>
      <NavLink
        exact
        to="/"
        className={(isActive) =>
          'navigate active' + (!isActive ? 'not-active navigate' : 'navigate')
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/admin"
        className={(isActive) =>
          'navigate active' + (!isActive ? 'not-active navigate' : 'navigate')
        }
      >
        Admin
      </NavLink>
    </header>
  );
}
