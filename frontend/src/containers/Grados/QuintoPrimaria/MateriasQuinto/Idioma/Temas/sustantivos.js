import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import './verbo.css';

function sustantivos() {
    return (
        <Container fluid className="grid">
            <Row justify="between" debug>
                <Col>
                    <h1 className="tituloT">Sustantivos</h1>
                    <p>
                        <br></br><br></br>
                        Como sustantivo (también escrito substantivo) se denomina la clase de palabras que se emplean para designar seres, entidades u objetos.
                        <br></br><br></br>
                        En gramática, los sustantivos son el tipo de palabras que se caracterizan por tener género (masculino y femenino) y número (singular y plural), que forman sintagmas nominales, y pueden funcionar como argumento verbal o como complementos del nombre.
                        <br></br><br></br>
                    </p>
                </Col>
                <Col>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            /**AQUI VA EL LINK DE YOUTUBE */
                            url='https://youtu.be/g6Vzr0d7i84'
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

export default sustantivos