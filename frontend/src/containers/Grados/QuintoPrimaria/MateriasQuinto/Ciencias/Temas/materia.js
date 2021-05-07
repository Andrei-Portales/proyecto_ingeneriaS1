import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import './materia.css';

function materia() {
    return (
        <Container fluid className="grid">
            <Row justify="between" debug>
                <Col sm={12} md={7} lg={6}>
                    <h1 className="tituloT">Cambios en la Materia</h1>
                    <p>
                        <br></br><br></br>
                        El estado en el cual se encuentra en particular una sustancia depende de dos factores o condiciones que son la temperatura y la presión por lo tanto si se modifica algunas de estas variables o las dos, la materia puede pasar de un estado a otro. 
                        Los cambios en la materia son:
                        <li>Fusión: es cuando un sólido se transforma en líquido.</li>
                        <li>Vaporización: es cuando un líquido se transforma en gas.</li>
                        <li>Cristalización: es el cambio de la materia del estado gaseoso al estado sólido sin pasar por el estado líquido.</li>
                        <li>Solidificación: es el cambio de estado de la materia de líquido a sólido.</li>
                        <li>Sublimación: es el cambio de estado de la materia sólida al estado gaseoso sin pasar por el estado líquido.</li>
                        <li>Condensación: es el cambio de estado que se produce en una sustancia al pasar del estado gaseoso al estado líquido.</li>
                        <br></br><br></br>

                    </p>
                </Col>
                <Col sm={12} md={5} lg={6}>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            /**AQUI VA EL LINK DE YOUTUBE */
                            url='https://youtu.be/x2nKoFYolj8'
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

export default materia