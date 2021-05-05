import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import './division.css';

function division() {
    return (
        <Container fluid className="grid">
            <Row justify="between" debug>
                <Col>
                    <h1 className="tituloT">Division</h1>
                    <p>
                        <br></br><br></br>
                        Una división es una operación matemática que consiste en dividir un número en partes iguales.
                        Una división tiene diferentes partes, llamadas términos. Los términos de la división son: <br></br><br></br>
                        <li>DIVIDENDO: es el número que vamos a dividir</li>
                        <li>DIVISOR: es el número que divide al dividendo, es decir la cantidad de partes en la que queremos dividir al dividendo.</li>
                        <li>COCIENTE: es el resultado de la operación</li>
                        <li>RESTO: es la parte que sobra, es decir que no se ha podido distribuir.</li> <br></br><br></br>

                    </p>
                </Col>
                <Col>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            /**AQUI VA EL LINK DE YOUTUBE */
                            url='https://youtu.be/mQ4wKV9_pZs'
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

export default division