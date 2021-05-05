import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import './semantica.css';

function semantica() {
    return (
        <Container fluid className="grid">
            <Row justify="between" debug>
                <Col>
                    <h1 className="tituloT"> La Semántica </h1>
                    <p>
                        <br></br><br></br>
                        Se denomina como semántica a la ciencia lingüística que estudia el significado de las palabras y expresiones, es decir, lo que las palabras quieren decir cuando hablamos o escribimos.
                        <br></br><br></br>
                        La finalidad de la semántica es descomponer el significado en unidades más pequeñas, llamadas semas o rasgos semánticos, estos permiten segmentar el significado de las palabras, y diferenciar palabras de significado parecido y palabras de significado opuesto
                        <br></br><br></br>
                        Por otro lado, la semántica lingüística se encarga de estudiar la denotación y connotación de las palabras, cuando el mensaje se expresa objetivamente, se dice que su significa es denotativo y, cuando a la comunicación objetiva se le añade alguna valoración personal mediante gestos o entonación, se habla de que su significado es connotativo.
                    </p>
                </Col>
                <Col>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            /**AQUI VA EL LINK DE YOUTUBE */
                            url='https://youtu.be/pGg_ePbMbMU'
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

export default semantica