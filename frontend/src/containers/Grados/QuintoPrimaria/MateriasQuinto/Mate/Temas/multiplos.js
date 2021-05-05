import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import './multiplos.css';

function multiplos() {
    return (
        <Container fluid className="grid">
            <Row justify="between" debug>
                <Col>
                    <h1 className="tituloT">Multiplos</h1>
                    <p>
                        <br></br><br></br>
                        Los múltiplos de un número son todos los posibles resultados de multiplicar ese 
                        número por todos y cada uno de los números naturales.  Así, los múltiplos del tres son: 
                        el cero, que es el resultado de multiplicar tres por cero; el tres, que es el resultado 
                        de multiplicar tres por uno; el seis que se obtiene al multiplicar tres por dos, etc. <br></br><br></br>

                        Gracias al concepto de múltiplo es posible definir ahora un tipo especial de números: los pares.
                        Se dice que un número es par si es múltiplo del dos.
                        Así, los números 2, 4, 6, 8,  etc., son pares. <br></br><br></br>

                    </p>
                </Col>
                <Col>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            /**AQUI VA EL LINK DE YOUTUBE */
                            url='https://youtu.be/wSm1O8Opvlo'
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

export default multiplos