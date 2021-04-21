import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Login() {
  return (
    <Container fluid>
      <Row>
        <Col sm={4} md={4} lg={4} />
        <Col sm={4} md={4} lg={4} className="login-container">
          <div className="login-button">
            <button type="submit">SALTAR</button>
          </div>
          <div className="login-text">
            <p className="login-student">ESTUDIANTE</p>
            <p className="login-icon">🧑</p>
          </div>
          <form>
            <input type="text" placeholder="Usuario" />
            <br />
            <br />
            <input type="password" placeholder="Contraseña" />
            <br />
            <a href="#" className="link-password">¿Olvidó contraseña?</a>
            <br />
            <Link to="/materia">
              <input type="submit" value="Ingresar" />
            </Link>
          </form>
          <p>¿Aún no tienes una cuenta? <Link to="/" className="link-register"> Registrarse</Link></p>
        </Col>
        <Col sm={4} md={4} lg={4} />
      </Row>
    </Container>
  );
}

export default Login;
