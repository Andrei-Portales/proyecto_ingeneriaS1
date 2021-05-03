/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from '../images/logoCompleto.png';

const A = styled.a`
  color: ${({ theme }) => theme.text};
`;

function navbar() {
  return (
      <nav className="navbar navbar-expand-lg">
        <img className="navbar-brand" src={Logo} alt="Logo" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <Link to="/grados">
              <A className="nav-link" href="#">GRADOS <span class="sr-only"></span></A>
            </Link>
            <Dropdown id="dropdown-basic-button">
              <Dropdown.Toggle variant="link" id="dropdown-basic">
                <A href="#">MATERIAS</A>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Link to="/materiascuarto">
                  <Dropdown.Item href="#/action-1">CUARTO</Dropdown.Item>
                </Link>
                <Link to="/materiasquinto">
                  <Dropdown.Item href="#/action-1">QUINTO</Dropdown.Item>
                </Link>
                <Link to="/materiassexto">
                  <Dropdown.Item href="#/action-1">SEXTO</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
            <li className="nav-item">
              <a className="nav-link" href="#">EJERCICIOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">OFFLINE</a>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default navbar;
