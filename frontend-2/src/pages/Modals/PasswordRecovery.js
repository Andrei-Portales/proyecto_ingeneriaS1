import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./password-recovery.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";

const PasswordRecovery = () => {
  const [emailState, setEmailState] = useState({ email: "" });

  const [state, setState] = useState({
    isOpen: true,
  });

  const [userState, setUserState] = useState({
    email: "",
    password: "",
  });

  const openModal = () => {
    setState({ isOpen: true });
  };

  const closeModal = () => {
    setState({ isOpen: false });
  };

  const submit = () => {
    const { email } = emailState;
  };

  const handleChange = (event) => {
    const { email, password } = userState;
    setEmailState({ email: event.target.value });

    const { target } = event;

    setUserState({
      email: target.id === "email" ? target.value : email,
      password: target.id === "password" ? target.value : password,
    });
  };

  const send = async () => {
    if (emailState.email !== "") sendPasswordResetEmail(emailState.email);
  };

  return (
    <Modal show={state.isOpen} onHide={closeModal}>
      <div className="modal_header">
        <Button variant="link" onClick={closeModal}>
          {" "}
          X{" "}
        </Button>
      </div>
      <div className="modal_body">
        <h2>Restablecer la contraseña</h2>
        <br />
        <p>
          Ingrese el correo electrónico asociado con su cuenta y le enviaremos
          un correo electrónico con instrucciones para restablecer su
          contraseña.
        </p>
        <br />
        <br />
        <input
          type="text"
          name="email"
          autoFocus="autofocus"
          placeholder="Correo electrónico"
          onChange={handleChange}
          value={emailState.email}
        />
        <br />
        <button type="submit" className="send-button" onClick={() => send()}>
          Enviar
        </button>
        <br />
        <br />
      </div>
    </Modal>
  );
};

export default PasswordRecovery;
