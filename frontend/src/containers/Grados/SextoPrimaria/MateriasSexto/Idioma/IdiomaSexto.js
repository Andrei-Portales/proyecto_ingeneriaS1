import React, { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import Idioma from '../../../../images/idioma.jpg';
import './IdiomaSexto.css';
import { Link } from 'react-router-dom';

class IdiomaSexto extends React.Component {
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
                            <Link to="/poesia">
                            <p className="tema2">La Poesía </p>
                            </Link>

                        </Row>

                        <Row className="temas" justify="start" debug >
                            <Link to="/lirico">
                            <p className="tema2">Género Lírico</p>
                            </Link>


                        </Row>
                        <Row className="temas" justify="start" debug >
                            <Link to="/semantica">
                            <p className="tema2">La Semántica</p>
                            </Link>


                        </Row>
                        <Row className="temas" justify="start" debug >
                            <Link to="/diptongo">
                            <p className="tema2"> Diptongo </p>
                            </Link>


                        </Row>
                        <Row className="temas" justify="start" debug >
                            <Link to="/triptongo">
                            <p className="tema2"> Triptongo</p>
                            </Link>


                        </Row>
                        <Row className="temas" justify="start" debug >
                            <Link to="/hiato">
                            <p className="tema2"> Hiato </p>
                            </Link>


                        </Row>




                    </Col>


                </Row>
            </Container>
        )
    }


}


export default IdiomaSexto;
