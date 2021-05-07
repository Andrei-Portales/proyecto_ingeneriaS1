import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import './articulo.css';

function articulo() {
    return (
        <Container fluid className="grid">
            <Row justify="between" debug>
                <Col sm={12} md={7} lg={6}>
                    <h1 className="tituloT">El Articulo</h1>
                    <p>
                        <br></br><br></br>
                        El artículo es la palabra que acompaña al sustantivo y siempre va delante de él. Es la palabra que funciona siempre como un determinante o identificador del sustantivo, esto es, señala si el sustantivo es conocido o no, e indica el género (femenino o masculino) y el número del sustantivo (singular o plural).
                        Los artículos se dividen en definidos (o determinantes) e indefinidos (o indeterminantes).
                        Los artículos definidos son aquellos que hablan de algo conocido y que se puedes identificar.
                        Los artículos indefinidos son aquellos que hablan de algo no conocido o que no se puede identificar.
                        <br></br><br></br>
                        El artículo neutro “lo”
                        Se usa para marcar abstracción, es decir, transforma adjetivos en sustantivos abstractos. No señala genero (femenino o masculino).
                        El artículo neutro “lo” se utiliza solamente acompañado de adjetivos, adverbios o participios. Nunca va acompañando al nombre.

                        <lu>Ejemplos:</lu> 
                        <li>–  Lo bueno es que tengo con quien compartir mi pena.</li>
                        <li>–  ¿Has visto lo rápido que corre tu hermana?</li>
                        <li>–  Admiro a mis amigos por lo leales que son.</li>
                        <br></br><br></br>
                    </p>
                </Col>
                <Col sm={12} md={5} lg={6}>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            /**AQUI VA EL LINK DE YOUTUBE */
                            url='https://youtu.be/RvSpRaLvFSM'
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

export default articulo