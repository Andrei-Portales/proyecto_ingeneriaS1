/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
import React from 'react';
import './Login.scss';
import './password-recovery.scss';
import { Link } from 'react-router-dom';
import DelayLink from 'react-delay-link';
import { Modal, Button } from 'react-bootstrap';
import ComputerImg from '../images/computer-work.png';
import SkipButton from '../Buttons/Skip';

// eslint-disable-next-line react/prefer-stateless-function
class Login extends React.Component {
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
      <>
        <div className="login-container">
          <div className="left-section">
            <div className="title-text">
              <h2>Iniciar sesión para</h2>
              <h2>guardar tus logros y avances</h2>
            </div>
            <img src={ComputerImg} alt="Imagen" />
          </div>
          <div className="right-section">
            <div className="skip-container">
              <DelayLink delay={800} to="/grados">
                <SkipButton />
              </DelayLink>
            </div>
            <div className="login-text">
              <p className="login-student">ESTUDIANTE</p>
            </div>
            <form>
              <input type="text" placeholder="Usuario" />
              <br />
              <input type="password" placeholder="Contraseña" />
              <br />
              <a href="#" className="link-password" onClick={this.openModal}>¿Olvidó contraseña?</a>
              <br />
              <Link to="/grados">
                <input type="submit" value="Ingresar" />
              </Link>
            </form>
            <br />
            <p>¿Aún no tienes una cuenta? <Link to="/" className="link-register"> Registrarse</Link></p>
          </div>
        </div>
        {/* MODAL CODE */}
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <div className="modal_header">
            <Button onClick={this.closeModal}> X </Button>
          </div>
          <div className="modal_body">
            <h2>Restablecer la contraseña</h2>
            <p>Ingrese el correo electrónico asociado con su cuenta y le enviaremos un correo electrónico con instrucciones para restablecer su contraseña. </p>
            <form>
              <br />
              <br />
              <input type="text" placeholder="Correo electrónico" />
              <br />
              <input type="submit" value="Enviar" />
              <br />
              <br />
            </form>
          </div>
        </Modal>
      </>
    );
  }
}

export default Login;
