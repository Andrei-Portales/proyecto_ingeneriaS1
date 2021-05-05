import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import './diptongo.css';

function diptongo() {
    return (
        <Container fluid className="grid">
            <Row justify="between" debug>
                <Col>
                    <h1 className="tituloT"> Diptongo </h1>
                    <p>
                        <br></br><br></br>
                        Un diptongo son dos vocales que forman una sola sílaba.
                        <br></br><br></br>
                        Si hay dos vocales junta y una de ellas, o las dos, es débil (i, u) puede ser un diptongo. Es decir, una sola sílaba:
                        pien-sa (2), rei-no (2), pues-to (2), pau-sa (2).
                        <br></br><br></br>
                        En algunas formas verbales se da el fenómeno del triptongo: vocal débil más vocal fuerte más vocal débil, caso de iai en una palabra como riáis
                    </p>
                </Col>
                <Col>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            /**AQUI VA EL LINK DE YOUTUBE */
                            url='https://youtu.be/BDogfXOZYA0'
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

export default diptongo