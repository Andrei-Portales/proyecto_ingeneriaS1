import React from 'react';
import './Grados.css';
import { Container, Row } from 'react-grid-system';
import { Link } from 'react-router-dom';
import Cuarto from '../images/4togrado.png';
import Quinto from '../images/5togrado.png';
import Sexto from '../images/6togrado.png';


function Grados() {
    return (
        <Container fluid className="grid">
            <h1 className="grados"> Grados </h1>
            <span>
                <Row justify="between" debug>
                    <div id="content">
                        <div class="roundedcorners">
                            <Link to="/materia">
                                <img src={Cuarto} />
                                <h1>Cuarto </h1>

                            </Link>

                        </div>
                    </div>
                    <div id="content">
                        <div class="roundedcorners">
                            <Link to="/materia">
                                <img src={Quinto} />
                                <h1>Quinto  </h1>

                            </Link>

                        </div>
                    </div>
                    <div id="content">
                        <div class="roundedcorners">
                            <Link to="/materia">
                                <img src={Sexto} />
                                <h1>Sexto </h1>

                            </Link>

                        </div>
                    </div>

                </Row>


            </span>
        </Container>
    );
}

export default Grados;