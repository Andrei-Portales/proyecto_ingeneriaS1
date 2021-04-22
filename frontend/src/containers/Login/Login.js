import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import ComputerImg from '../images/computer-work.png';

// eslint-disable-next-line react/prefer-stateless-function
class Login extends React.Component {
  render() {
    return (
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
            <Link to="/grados">
              <button type="submit">SALTAR</button>
            </Link>
          </div>
          <div className="login-text">
            <p className="login-student">ESTUDIANTE</p>
          </div>
          <form>
            <input type="text" placeholder="Usuario" />
            <br />
            <input type="password" placeholder="Contraseña" />
            <br />
            <a href="#" className="link-password">¿Olvidó contraseña?</a>
            <br />
            <Link to="/grados">
              <input type="submit" value="Ingresar" />
            </Link>
            </form>
          <br />
          <p>¿Aún no tienes una cuenta? <Link to="/" className="link-register"> Registrarse</Link></p>
        </div>
      </div>
    );
  }
}

export default Login;
