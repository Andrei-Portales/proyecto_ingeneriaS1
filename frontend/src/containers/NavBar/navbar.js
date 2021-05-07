/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from '../images/logoCompleto.png';

const A = styled.a`
  color: ${({ theme }) => theme.text} !important;
`;

function navbar() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/grados">
            <A className="nav-link" href="#">Grados</A>
          </Link>
          <Dropdown id="dropdown-basic-button">
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              <A href="#">Materias</A>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Link to="/materiascuarto">
                <Dropdown.Item href="#/action-1">Cuarto</Dropdown.Item>
              </Link>
              <Link to="/materiasquinto">
                <Dropdown.Item href="#/action-1">Quinto</Dropdown.Item>
              </Link>
              <Link to="/materiassexto">
                <Dropdown.Item href="#/action-1">Sexto</Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
          <Link to="/ejercicios">
            <A className="nav-link" href="#">Ejercicios</A>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;
