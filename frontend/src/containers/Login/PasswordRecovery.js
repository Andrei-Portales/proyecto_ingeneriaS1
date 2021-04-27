/* eslint-disable max-len */
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class PasswordRecovery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <Modal show={this.state.isOpen} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <div className="modal_body">
          <h2>Restablecer la contraseña</h2>
          <p>Ingrese el correo electrónico asociado con su cuenta y le enviaremos un correo electrónico con instrucciones para restablecer su contraseña. </p>
          <form>
            <input type="text" placeholder="Usuario" />
            <br />
            <input type="submit" value="Ingresar" />
          </form>
        </div>
        <div className="modal_footer">
          <Button variant="secondary" onClick={this.closeModal}>
            Close
          </Button>
        </div>
      </Modal>
    );
  }
}

export default PasswordRecovery;
