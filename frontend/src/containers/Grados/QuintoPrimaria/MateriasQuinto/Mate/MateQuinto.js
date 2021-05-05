import React, { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import Mate from '../../../../images/matematicas.png';
import './MateQuinto.css';
import { Link } from 'react-router-dom';

class MateQuinto extends React.Component {
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
                        <img src={Mate}></img>
                        <p className="info">
                            En esta sección encontraras diversos temas matematicos, en los cuales encontraras una sección teórica y una sección practica, asi como ejercicios para resultados y guias mediante videos.
                        </p>


                    </Col>

                    <Col className="title">
                        <Row className="temas" justify="start" debug >
                            <Link to="/division">
                            <p className="tema2">Division</p>
                            </Link>

                        </Row>

                        <Row className="temas" justify="start" debug >
                            <Link to="/multiplos">
                            <p className="tema2">Multiplos</p>
                            </Link>

                        </Row>
                        <Row className="temas" justify="start" debug >
                            <Link to="/fracciones">
                            <p className="tema2">Fracciones</p>
                            </Link>

                        </Row>
                        <Row className="temas" justify="start" debug >
                            <Link to="/num_mix">
                            <p className="tema2">Numeros mixtos</p>
                            </Link>

                        </Row>
                        <Row className="temas" justify="start" debug >
                            <Link to="/val_posi">
                            <p className="tema2"> Valor Poscional </p>
                            </Link>

                        </Row>
                        <Row className="temas" justify="start" debug >
                            <Link to="/propor">
                            <p className="tema2">Proporciones</p>
                            </Link>

                        </Row>




                    </Col>


                </Row>
            </Container>
        )
    }


}


export default MateQuinto;
