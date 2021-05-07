import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import './num_mix.css';

function num_mix() {
    return (
        <Container fluid className="grid">
            <Row justify="between" debug>
                <Col sm={12} md={7} lg={6}>
                    <h1 className="tituloT">Numeros Mixtos</h1>
                    <p>
                        <br></br><br></br>
                        Los números mixtos o fracciones mixtas son los números quebrados que se conforman
                        con un número entero y una fracción, que obligadamente tiene que tener un numerador
                        menor al denominador. <br></br><br></br>

                        Todo número mixto está formado por dos partes:
                        <li>Un número entero </li>
                        <li>Una fracción propia</li>
                        Los números fraccionarios generalmente se conforman con números positivos, pues los
                        números negativos producen resultados contrarios.
                        La lectura de estos números tiene un orden de lectura y debe también aclararse que los
                        números mixtos se convierten en fracciones impropias como se muestra en la segunda
                        operación de la imagen. <br></br><br></br>
                        

                    </p>
                </Col>
                <Col sm={12} md={5} lg={6}>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            /**AQUI VA EL LINK DE YOUTUBE */
                            url='https://youtu.be/q7JptT6FroY'
                            className='react-player'
                            playing
                            width='100%'
                            height='100%'
                            controls='true'
                        />
                    </div>
                </Col>
            </Row>


        </Container>
    )
}

export default num_mix