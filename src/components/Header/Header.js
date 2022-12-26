import React, { useState } from 'react';
import GhostIcon from 'assets/question.png';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import Groups from 'components/Groups/Groups';

function Header() {
  const [openModal, setOpenModal] = useState(true);
  const location = useLocation();
  const path = location.pathname;

  const routesTitle = {
    '/': 'Questionary'
  }

  return (
    <header className="header">
      <img src={GhostIcon} alt='icon' />

      <h1>{routesTitle[path] || 'Questionary'}</h1>

      <HiMenuAlt3 onClick={() => setOpenModal(true)} />

      {openModal && <Modal closeModal={() => setOpenModal(false)} children={<Groups />} />}

    </header>
  );
}

export default Header;
