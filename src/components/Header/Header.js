import React from 'react';
import GhostIcon from 'assets/question.png';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';

function Header() {

  const location = useLocation();
  const path = location.pathname;

  const routesTitle = {
    '/': 'Questionary'
  }

  return (
    <header className="header">
      <img src={GhostIcon} alt='icon' />

      <h1>{routesTitle[path] || 'Questionary'}</h1>

      <HiMenuAlt3 />

    </header>
  );
}

export default Header;
