import React, { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import Ciencias from '../../../../images/ciencias.jpg';
import './CienciasQuinto.css';
import { Link } from 'react-router-dom';

class CienciasQuinto extends React.Component {
    state = {
        divTema1: false,




    }
    render() {
        var HandleChange = e => {




            this.setState({ divTema1: !this.state.divTema1 });




        }
        const x = this.state.divTema1;
        return (
            <Container fluid className="grid" >
                <Row justify="between" debug>
                    <Col className="colImg">
                        <img src={Ciencias}></img>
                        <p className="info">
                            En esta sección encontraras diversos temas de ciencia, en los cuales encontraras una sección teórica y una sección practica, asi como ejercicios para resultados y guias mediante videos.
                        </p>


                    </Col>

                    <Col className="title">
                        <Row className="temas" justify="start" debug >
                            <Link to="/origen_de_vida">
                            <p className="tema2">Origen de la vida </p>
                            </Link>

                        </Row>

                        <Row className="temas" justify="start" debug >
                            <Link to="/origen_mayas">
                            <p className="tema3">Origen de la vida desde la Cultura Maya</p>
                            </Link>


                        </Row>
                        <Row className="temas" justify="start" debug >
                            <Link to="/celulas">
                            <p className="tema4">Las Células </p>
                            </Link>

                        </Row>
                        <Row className="temas" justify="start" debug >
                            <Link to="/anatomia">
                            <p className="tema5">Anatómia</p>
                            </Link>

                        </Row>
                        <Row className="temas" justify="start" debug >
                            <Link to="/materia">
                            <p className="tema6">Cambios en la Materia</p>
                            </Link>

                        </Row>
                        <Row className="temas" justify="start" debug >
                            <Link to="/inves_cienti">
                            <p className="tema7">Investigación Científica</p>
                            </Link>

                        </Row>




                    </Col>


                </Row>
            </Container>
        )
    }


}


export default CienciasQuinto;
