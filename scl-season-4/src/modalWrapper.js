import React from 'react';
import Modal from 'react-responsive-modal';

export default class Centered extends React.Component {
  state = {
    open: false,
  };

  render() {
    const open = this.props.open;
    return (
      <div className="Modal">{' '}
        <Modal open={open} onClose={this.props.onCloseModal} >
        {this.props.children}
        </Modal>
      </div>
    );
  }
}