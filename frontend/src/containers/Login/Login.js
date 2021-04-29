/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
import React from 'react';
import './Login.scss';
import styled from 'styled-components';
import './password-recovery.scss';
import { Link } from 'react-router-dom';
import DelayLink from 'react-delay-link';
import { Modal, Button } from 'react-bootstrap';
import ComputerImg from '../images/computer-work.png';
import SkipButton from '../Buttons/Skip';

// COLOR APLICADO ESPECIFIAMENTE DEPENDIENDO EL MODO DARK/LIGHT
// LOS DEMAS ESTILOS ESTAN EN login.scss
const Input = styled.input`
  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};
`;

const A = styled.a`
  color: ${({ theme }) => theme.link};
`;

const Div = styled.div`
  background-color: ${({ theme }) => theme.body};
`;

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
              <Input type="text" placeholder="Usuario" />
              <br />
              <Input type="password" placeholder="Contraseña" />
              <br />
              <A href="#" className="link-password" onClick={this.openModal}>¿Olvidó contraseña?</A>
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
          <Div className="modal_header">
            <Button variant="link" onClick={this.closeModal}> X </Button>
          </Div>
          <Div className="modal_body">
            <h2>Restablecer la contraseña</h2>
            <p>Ingrese el correo electrónico asociado con su cuenta y le enviaremos un correo electrónico con instrucciones para restablecer su contraseña. </p>
            <form>
              <br />
              <br />
              <Input type="text" name="email" autoFocus="autofocus" placeholder="Correo electrónico" />
              <br />
              <input type="submit" value="Enviar" />
              <br />
              <br />
            </form>
          </Div>
        </Modal>
      </>
    );
  }
}

export default Login;
