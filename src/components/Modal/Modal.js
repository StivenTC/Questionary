import React from 'react';

function Modal({ closeModal, children }) {

  return (
    <section className="modal">
      <div className="modal-container">
        {children}
      </div>
      <div className="modal-backdrop" onClick={() => closeModal()} />
    </section>
  );
}

export default Modal;
