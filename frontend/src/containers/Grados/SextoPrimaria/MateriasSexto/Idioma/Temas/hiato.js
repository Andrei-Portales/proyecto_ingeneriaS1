import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import './hiato.css';

function hiato() {
    return (
        <Container fluid className="grid">
            <Row justify="between" debug>
                <Col sm={12} md={7} lg={6}>
                    <h1 className="tituloT"> Hiato </h1>
                    <p>
                        <br></br><br></br>
                        El hiato es el encuentro de 2 vocales que se pronuncian en sílabas distintas. El término hiato es de origen latín hiatus que significa “abertura” o “separación”
                        <br></br><br></br>
                        En la gramática, es importante resaltar que las vocales fuertes o abiertas son A, E, O y, las vocales débiles o cerradas son I y U.
                        <br></br><br></br>
                        <lu>En virtud de lo anterior, el hiato puede ser:</lu>
                        <li>Hiato simple</li>
                        se presenta con la unión de 2 vocales fuertes o 2 vocales débiles, por ejemplo: mu-se-o, po-e-ma, entre otros.
                        <li>Hiato acentual</li>
                        se observa con la unión de una vocal débil tónica con una vocal fuerte átona o viceversa, siempre y cuando la vocal débil lleve el acento tónico como: son-rí-e, ca-í-da, fi-lo-so-fí-a, etcétera.
                        Cabe resaltar, que la letra “H” entre 2 vocales no impide que se forme el hiato, por ejemplo: bú-ho.
                        
                    </p>
                </Col>
                <Col sm={12} md={5} lg={6}>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            /**AQUI VA EL LINK DE YOUTUBE */
                            url='https://youtu.be/VMJi53lnYoM'
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

export default hiato