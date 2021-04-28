/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Logo from '../images/logoCompleto.png';

class navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">              
        <img className="navbar-brand" src={Logo} />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <Link to="/grados">
              <a className="nav-link" href="#">GRADOS <span class="sr-only"></span></a>
            </Link>
            <DropdownButton variant="link" id="dropdown-basic-button" title="MATERIAS">
              <Link to="/materia">
                <Dropdown.Item href="#/action-1">CUARTO</Dropdown.Item>
              </Link>
              <Link to="/materia">
                <Dropdown.Item href="#/action-1">QUINTO</Dropdown.Item>
              </Link>
              <Link to="/materia">
                <Dropdown.Item href="#/action-1">SEXTO</Dropdown.Item>
              </Link>
            </DropdownButton>
            <li className="nav-item">
              <a className="nav-link" href="#">EJERCICIOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">OFFLINE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">MODO OSCURO</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
  
export default navbar;
