/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import './Register.scss';
import styled from 'styled-components';
import { Row } from 'react-grid-system';
import { Link, useHistory } from 'react-router-dom';
import DelayLink from 'react-delay-link';
import ComputerImg from '../images/computer-work.png';
import SkipButton from '../Buttons/Skip';

// COLOR APLICADO ESPECIFIAMENTE DEPENDIENDO EL MODO DARK/LIGHT
// LOS DEMAS ESTILOS ESTAN EN register.scss
const Input = styled.input`
  background: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};
`;

const Container = styled.div`
background-color: ${({ theme }) => theme.navbar} !important;
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

const Register = () => {
  const [state, setState] = useState({
    email: '',
    name: '',
    password: '',
    cPassword: '',
  });

  const history = useHistory();

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const register = () => {
    const { email, name, password, cPassword } = state;

    if (email.trim() === '' || name.trim() === ''
    || password.trim() === '' || cPassword.trim() === '') {
    // Toast para mostrar si existe algun campo vacio
      return; // codigo por si hay campos vacios
    }

    if (password.trim() !== cPassword.trim()) {
    // Toast para mostar contrasenas no coinciden
      return; // codigo por si las contrasenas no son iguales
    }

    if (!validateEmail(email)) return; // codigo por si el email no es verdadero

    fetch('http://165.227.208.149:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: state.email.trim(),
        name: state.name.trim() ,
        password: state.password.trim(),
      }),
    }).then((res) => res.json()).then((result) => {
      if (result.result) {
        console.log(result);
        history.push('/login');
      } else {
        console.log('Error');
      }
    });
  };

  const handleChange = (event) => {
    const { email, name, password, cPassword } = state;

    const { target } = event;

    setState({
      email: target.id === 'email' ? event.target.value : email,
      name: target.id === 'name' ? event.target.value : name,
      password: target.id === 'password' ? event.target.value : password,
      cPassword: target.id === 'cPassword' ? event.target.value : cPassword,
    });
  };

  return (
    <Container fluid className="register-container">
      <Row>
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
          <Input
            id="email"
            type="text"
            placeholder="Correo electrónico"
            value={state.email}
            onChange={handleChange}
          />
          <br />
          <Input
            id="name"
            type="text"
            placeholder="Nombre"
            value={state.name}
            onChange={handleChange}
          />
          <br />
          <Input
            id="password"
            type="password"
            placeholder="Contraseña"
            value={state.password}
            onChange={handleChange}
          />
          <br />
          <Input
            id="cPassword"
            type="password"
            placeholder="Confirmar contraseña"
            value={state.cPassword}
            onChange={handleChange}
          />
          <br />
          <br />
          <button type="submit" className="register-button" onClick={register}> Registrarse</button>
          <br />
          <p>
            ¿Ya tienes una cuenta?
            <Link to="/login" className="link-register">
              {' '}
              Ingresar
            </Link>
          </p>
        </div>
      </Row>
    </Container>
  );
};

export default Register;
