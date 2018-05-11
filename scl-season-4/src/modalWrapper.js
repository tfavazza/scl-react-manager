import React from 'react';
import Modal from 'react-responsive-modal';

const ModalWrapper = props => {
    const open = props.open;
    return (
      <div className="Modal">{' '}
        <Modal open={open} onClose={props.onCloseModal} >
        {props.children}
        </Modal>
      </div>
    );
}
export default ModalWrapper;