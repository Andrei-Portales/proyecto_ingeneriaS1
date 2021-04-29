/* eslint-disable max-len */
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const PasswordRecovery = (props) => {
  const [state, setState] = useState({
    isOpen: false,
  });

  const [emailState, setEmailState] = useState({ email: '' });

  const closeModal = () => {
    setState({ isOpen: false });
  };

  const handleChange = (event) => {
    setEmailState({ email: event.target.value });
  };

  const submit = () => {
    const { email } = emailState;

    if (email.trim() === '') return;


    fetch('http://localhost:3000/send_recovery_email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: emailState.email.trim(),
      }),
    }).then(res=> res.json()).then((result) => {
      console.log(result);
      if (result){
        alert('Se envio en correo');
      }else{
        alert('No se logro enviar el correo');
      }
    });
  };

  return (
    <Modal show={state.isOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <div className="modal_body">
        <h2>Restablecer la contraseña</h2>
        <p>
          Ingrese el correo electrónico asociado con su cuenta y le enviaremos
          un correo electrónico con instrucciones para restablecer su
          contraseña.{' '}
        </p>
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Usuario"
            onChange={handleChange}
            value={emailState.email}
          />
          <br />
          <input type="submit" value="Ingresar" />
        </form>
      </div>
      <div className="modal_footer">
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default PasswordRecovery;
