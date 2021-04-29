/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
import React, { useState } from 'react';
import './Login.scss';
import styled from 'styled-components';
import './password-recovery.scss';
import { Link } from 'react-router-dom';
import DelayLink from 'react-delay-link';
import { Modal, Button } from 'react-bootstrap';
import ComputerImg from '../images/computer-work.png';
import SkipButton from '../Buttons/Skip';

import { useHistory } from 'react-router-dom';

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
//

// eslint-disable-next-line react/prefer-stateless-function
const Login = (props) => {
  const history = useHistory();

  const [state, setState] = useState({
    isOpen: false,
  });

  const [userState, setUserState] = useState({
    email: '',
    password: '',
  });

  const openModal = () => {
    setState({ isOpen: true });
  };

  const closeModal = () => {
    setState({ isOpen: false });
  };

  const onSubmit = () => {
    
    const {email, password} = userState;

    if (email.trim() === '' || password.trim() === '')
    return;

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: userState.email.trim(),
        password: userState.password.trim(),
      }),
    }).then(res=> res.json()).then((result) => {

      if (result){
        history.push('/grados');
      }else{
        history.push('/login');
      }
    });
  };


  const handleChange = (event)=> {
    const {email, password} = userState;

    const target = event.target;

    setUserState({
      email: target.id === 'email'? target.value : email,
      password: target.id === 'password' ? target.value : password
    });
  }

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
          <form onSubmit={onSubmit}>
            <Input type="text" placeholder="Correo" id="email" onChange={handleChange} value={userState.email}/>
            <br />
            <Input type="password" placeholder="Contraseña" id="password" onChange={handleChange} value={userState.password}/>
            <br />
            <A href="#" className="link-password" onClick={openModal}>
              ¿Olvidó contraseña?
            </A>
            <br />
              <input type="submit" value="Ingresar" />
          </form>
          <br />
          <p>
            ¿Aún no tienes una cuenta?{' '}
            <Link to="/" className="link-register">
              {' '}
              Registrarse
            </Link>
          </p>
        </div>
      </div>
      {/* MODAL CODE */}
      <Modal show={state.isOpen} onHide={closeModal}>
        <Div className="modal_header">
          <Button variant="link" onClick={closeModal}>
            {' '}
            X{' '}
          </Button>
        </Div>
        <Div className="modal_body">
          <h2>Restablecer la contraseña</h2>
          <p>
            Ingrese el correo electrónico asociado con su cuenta y le enviaremos
            un correo electrónico con instrucciones para restablecer su
            contraseña.{' '}
          </p>
          <form>
            <br />
            <br />
            <Input
              type="text"
              name="email"
              autoFocus="autofocus"
              placeholder="Correo electrónico"
            />
            <br />
            <input type="submit" value="Enviar" />
            <br />
            <br />
          </form>
        </Div>
      </Modal>
    </>
  );
};

export default Login;
