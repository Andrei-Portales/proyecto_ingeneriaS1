import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import './origen_de_vida.css';

function origen_de_vida() {
    return (
        <Container fluid className="grid">
            <Row justify="between" debug>
                <Col>
                    <h1 className="tituloT">Origen de la Vida</h1>
                    <p>
                        <br></br><br></br>
                    ¿Cómo se originó la vida en la Tierra? Esta pregunta muchas personas, dedicadas a la
                    ciencia o no, trataron de responder por medio de teorías; muchas de las cuales no son
                    consideradas válidas actualmente.<br></br><br></br>

                    Una de las teorías que se mantuvo vigente por más tiempo fue la teoría de la
                    abiogénesis o teoría de la generación espontánea, que sostiene que diferentes
                    formas de vida pueden originarse a partir de la materia sin vida, por
                    transformaciones espontáneamente. <br></br><br></br>
        
                    La abiogénesis fue aceptada desde que Aristóteles la propuso, en el siglo IV a.
                    C., hasta el siglo XVII, en que algunos científicos comenzaron a ponerla en
                    duda. Pero recién en el siglo XIX se demostró su falsedad de forma definitiva.
                    La teoría de la generación espontánea se basó en observaciones de fenómenos,
                    cuya interpretación no era correcta por carecer de datos suficientes. Las
                    personas veían cómo restos de alimentos se cubrían de gusanos en unos días o
                    cómo aparecían renacuajos en charcas vacías y pensaban que esto se debía a
                    Teorías sobre el origen de la vida: generación espontánea y biogenésistransformaciones
                    de la materia inerte. Muchos científicos, como Van Helmont y Needham, suponían que existía
                    una fuerza vital o principio activo en la materia inanimada, responsable de las transformaciones. <br></br><br></br>

                    </p>
                </Col>
                <Col>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            /**AQUI VA EL LINK DE YOUTUBE */
                            url='https://youtu.be/9YTjqVGvHSs'
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

export default origen_de_vida