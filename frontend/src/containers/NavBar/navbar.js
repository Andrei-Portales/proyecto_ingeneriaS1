import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../images/logoCompleto.png';

class navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">              
                <img class="navbar-brand" src={Logo} />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <Link to="/grados">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">GRADOS <span class="sr-only"></span></a>
                        </li>
                    </Link>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        MATERIAS
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to="/materia">
                                <a class="dropdown-item" href="#">CUARTO</a>
                            </Link>
                            <Link to="/materia">
                                <a class="dropdown-item" href="#">QUINTO</a>
                            </Link>
                            <Link to="/materia">
                                <a class="dropdown-item" href="#">SEXTO</a>
                            </Link>
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">EJERCICIOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">OFFLINE</a>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
  
export default navbar;
