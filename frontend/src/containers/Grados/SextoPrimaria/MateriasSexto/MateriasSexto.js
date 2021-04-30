import React from 'react';
import { Link } from 'react-router-dom';

import './MateriasSexto.css';
import { Container, Row } from 'react-grid-system';
import Mate from '../../../images/matematicas.png';
import Ciencias from '../../../images/ciencias.jpg';
import Idioma from '../../../images/idioma.jpg';

function MateriasSexto() {
    return (
        <Container fluid className="grid">
            <h1 className="materias"> Materias 6to</h1>
            <span>
                <Row justify="between" debug>
                    <div id="content">
                        <div className="roundedcorners">
                            <Link to="/matesexto">
                                <img src={Mate} />
                                <h1>Matematicas</h1>

                            </Link>

                        </div>
                    </div>
                    <div id="content">
                        <div className="roundedcorners">
                            <Link to="/cienciassexto">
                                <img src={Ciencias} />
                                <h1>Ciencias </h1>

                            </Link>

                        </div>
                    </div>
                    <div id="content">
                        <div className="roundedcorners">
                            <Link to="/idiomasexto">
                                <img src={Idioma} />
                                <h1>Idioma</h1>

                            </Link>

                        </div>
                    </div>

                </Row>


            </span>
        </Container>
    );
}

export default MateriasSexto;
