import React from 'react';

function Modal({ closeModal, children }) {

  return (
    <section className="modal" role="dialog" aria-modal="true">
      <div className="modal-container">
        {children}
      </div>
      <button 
        type="button" 
        className="modal-backdrop" 
        aria-label="Cerrar modal"
        onClick={() => closeModal()} 
      />
    </section>
  );
}

export default Modal;
