import React from 'react';

function Modal({ closeModal, children }) {

  return (
    <section className="modal">
      <div className="modal-backdrop" onClick={() => closeModal()} />
      <div className="modal-container">
        {children}
      </div>
    </section>
  );
}

export default Modal;
