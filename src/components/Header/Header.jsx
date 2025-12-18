import React, { useState } from 'react';
import GhostIcon from 'assets/question.png';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useLocation, Link } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import Groups from 'components/Groups/Groups';

function Header() {
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const routesTitle = {
    '/': 'Questionary'
  }

  return (
    <header className="header">
      <Link to={`/`}>
        <img src={GhostIcon} alt='icon' />
      </Link>

      <h1>{routesTitle[path] || 'Questionary'}</h1>

      <button type="button" aria-label="Abrir menú" onClick={() => setOpenModal(true)}>
        <HiMenuAlt3 />
      </button>

      {openModal && <Modal closeModal={() => setOpenModal(false)} children={<Groups />} />}

    </header>
  );
}

export default Header;
