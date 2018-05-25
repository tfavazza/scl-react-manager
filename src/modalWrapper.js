import React from 'react';
import Modal from 'react-responsive-modal';
import './App.css'

const ModalWrapper = props => {
    const open = props.open;
    return (
      <div className="Modal modal-width">{' '}
        <Modal open={open} onClose={props.onCloseModal} classNames={{modal: 'modal-width'}}>
        {props.children}
        </Modal>
      </div>
    );
}
export default ModalWrapper;