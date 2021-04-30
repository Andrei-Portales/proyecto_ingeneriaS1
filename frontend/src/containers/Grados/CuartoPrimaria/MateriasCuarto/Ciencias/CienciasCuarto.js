import React, { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import Ciencias from '../../../../images/ciencias.jpg';
import './CienciasCuarto.css';
import { Link } from 'react-router-dom';

class CienciasCuarto extends React.Component {
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
                            <Link to="/tema1">


                                <p className="tema2"> Dinamica de fluidos</p>
                            </Link>

                        </Row>

                        <Row className="temas" justify="start" debug >
                            <Link to="/tema1">
                                <p className="tema2"> TEMA2</p>
                            </Link>


                        </Row>
                        <Row className="temas" justify="start" debug >
                            <p className="tema2"> TEMA3</p>


                        </Row>
                        <Row className="temas" justify="start" debug >
                            <p className="tema2"> TEMA4</p>


                        </Row>
                        <Row className="temas" justify="start" debug >
                            <p className="tema2"> TEMA5</p>


                        </Row>
                        <Row className="temas" justify="start" debug >
                            <p className="tema2"> TEMA1</p>


                        </Row>




                    </Col>


                </Row>
            </Container>
        )
    }


}


export default CienciasCuarto;
