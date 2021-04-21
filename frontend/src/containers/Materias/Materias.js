import React from 'react';

import './Materias.css';
import { Container, Row } from 'react-grid-system';
import Mate from '../images/matematicas.png';
import Ciencias from '../images/ciencias.jpg';
import Idioma from '../images/idioma.jpg';


function Materias() {
    return (
        <Container fluid className="grid">
            <h1 className="materias"> Materias</h1>
            <span>
                <Row justify="between" debug>
                    <div id="content">
                        <div class="roundedcorners">
                            <a href="#">
                                <img src={Mate} />
                                <h1>Matematicas</h1>

                            </a>

                        </div>
                    </div>
                    <div id="content">
                        <div class="roundedcorners">
                            <a href="#">
                                <img src={Ciencias} />
                                <h1>Ciencias </h1>

                            </a>

                        </div>
                    </div>
                    <div id="content">
                        <div class="roundedcorners">
                            <a href="#">
                                <img src={Idioma} />
                                <h1>Idioma</h1>

                            </a>

                        </div>
                    </div>

                </Row>


            </span>
        </Container>
    );
}

export default Materias;
