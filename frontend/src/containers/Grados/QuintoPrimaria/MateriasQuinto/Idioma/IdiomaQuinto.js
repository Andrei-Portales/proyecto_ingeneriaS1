import React, { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import Idioma from '../../../../images/idioma.jpg';
import './IdiomaQuinto.css';
import { Link } from 'react-router-dom';

class IdiomaQuinto extends React.Component {
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
                        <img src={Idioma}></img>
                        <p className="info">
                            En esta sección encontraras diversos temas de ciencia, en los cuales encontraras una sección teórica y una sección practica, asi como ejercicios para resultados y guias mediante videos.
                        </p>


                    </Col>

                    <Col className="title">
                        <Row className="temas" justify="start" debug >

                            <p className="tema2">Los Sustantivos</p>


                        </Row>

                        <Row className="temas" justify="start" debug >
                            <p className="tema2">Prononbre Personal</p>


                        </Row>
                        <Row className="temas" justify="start" debug >
                            <p className="tema2">El verbo </p>


                        </Row>
                        <Row className="temas" justify="start" debug >
                            <p className="tema2">La Oracion </p>


                        </Row>
                        <Row className="temas" justify="start" debug >
                            <p className="tema2">Figuras Literarias</p>


                        </Row>
                        <Row className="temas" justify="start" debug >
                            <p className="tema2"> El Articulo </p>


                        </Row>




                    </Col>


                </Row>
            </Container>
        )
    }


}


export default IdiomaQuinto;
