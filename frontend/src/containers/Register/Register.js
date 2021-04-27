/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';
import DelayLink from 'react-delay-link';
import ComputerImg from '../images/computer-work.png';
import SkipButton from '../Buttons/Skip';

class Register extends React.Component {
  render() {
    return (
      <div className="register-container">
        <div className="left-section">
          <div className="title-text">
            <h2>Crea una cuenta para</h2>
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
            <input type="text" placeholder="Correo electrónico" />
            <br />
            <input type="text" placeholder="Nombre" />
            <br />
            <input type="password" placeholder="Contraseña" />
            <br />
            <input type="password" placeholder="Confirmar contraseña" />
            <br />
            <br />
            <Link to="/grados">
              <input type="submit" value="Registrarse" />
            </Link>
          </form>
          <br />
          <p>
            ¿Ya tienes una cuenta?
            <Link to="/login" className="link-register"> Ingresar</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Register;
