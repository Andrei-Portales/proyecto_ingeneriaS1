import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import './verbo.css';

function verbo() {
    return (
        <Container fluid className="grid">
            <Row justify="between" debug>
                <Col>
                    <h1 className="tituloT">El Verbo</h1>
                    <p>
                        <br></br><br></br>
                        Se conoce como verbo una clase de palabra cuyo significado indica la acción, el estado o proceso que realiza o sufre cualquier realidad mencionada en la oración. En la oración, el verbo funciona como el núcleo del predicado.
                        <br></br><br></br>
                        Al igual que otras palabras, el verbo presenta lexema, en el que reside el significado verbal, y morfemas de persona y número. Tiene, además, morfemas de tiempo, modo y aspecto.
                        Se conoce como verbo una clase de palabra cuyo significado indica la acción, el estado o proceso que realiza o sufre cualquier realidad mencionada en la oración. En la oración, el verbo funciona como el núcleo del predicado.
                        <br></br><br></br>
                        Al igual que otras palabras, el verbo presenta lexema, en el que reside el significado verbal, y morfemas de persona y número. Tiene, además, morfemas de tiempo, modo y aspecto.
                    </p>
                </Col>
                <Col>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            /**AQUI VA EL LINK DE YOUTUBE */
                            url='https://youtu.be/F31XS-rjABA'
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

export default verbo