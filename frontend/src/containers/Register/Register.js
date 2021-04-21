import React from 'react';
import './Register.scss';
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
            <input type="text" placeholder="Correo electrónico" />
            <br />
            <input type="text" placeholder="Nombre" />
            <br />
            <input type="password" placeholder="Contraseña" />
            <br />
            <input type="password" placeholder="Confirmar contraseña" />
            <br />
            <br />
            <input type="submit" value="Registrarse" />
          </form>
          <p>¿Ya tienes una cuenta? <a href="#" className="link-register"> Ingresar</a></p>
          <br />
          <br />
          <br />
        </Col>
        <Col sm={4} md={4} lg={4} />
      </Row>
    </Container>
  );
}

export default Login;
