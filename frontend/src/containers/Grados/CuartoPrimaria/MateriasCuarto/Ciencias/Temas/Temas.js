import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import './Temas.css';

function Temas() {
    return (
        <Container fluid className="grid">
            <Row justify="between" debug>
                <Col sm={12} md={7} lg={6}>
                    <h1 className="tituloT">data</h1>
                    <p>INFORMACION DEL TEMA</p>
                </Col>
                <Col sm={12} md={5} lg={6}>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            /**AQUI VA EL LINK DE YOUTUBE */
                            url='https://www.youtube.com/watch?v=IisrIpvtlME&ab_channel=CesarAntonioIzquierdoMerlo'
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

export default Temas
