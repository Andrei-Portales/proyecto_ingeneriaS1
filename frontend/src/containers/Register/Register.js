import React from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';
import ComputerImg from '../images/computer-work.png';

function Login() {
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
          <Link to="/grados">
            <button type="submit">SALTAR</button>
          </Link>
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
        <p>¿Ya tienes una cuenta? <Link to="/login" className="link-register"> Ingresar</Link></p>
      </div>
    </div>
  );
}

export default Login;
