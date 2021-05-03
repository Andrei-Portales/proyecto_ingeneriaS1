import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import './celulas.css';

function celulas() {
    return (
        <Container fluid className="grid">
            <Row justify="between" debug>
                <Col>
                    <h1 className="tituloT">Las Celulas</h1>
                    <p>
                        <br></br><br></br>
                        La célula es la parte más pequeña de materia viviente que tiene vida propia, es decir, que nace, crece, se multiplica y muere.
                        Las células tienen formas diversas: pueden ser redondeadas, estrelladas., alargadas, poligonales… Son microscópicas, es decir que solo se pueden ver con
                        el microscopio, aunque hay algunas excepciones.<br></br><br></br>


                        2. Funciones de la célula
                        Las células están vivas, por eso realizan las tres funciones vitales: nutrición, reproducción y relación.
                        a) Nutrición
                        Se alimentan absorbiendo alimentos disueltos; por ejemplo, las células de nuestro cuerpo se nutren de los alimentos que lleva la sangre y tambiéncapturando sustancias sólidas, que después digiere en el citoplasma. Esto ocurre con los glóbulos blancos de la sangre, que se comen a los microbios.
                        b) Reproducción
                        Se multiplican partiéndose en dos trozos.
                        c) Relación
                        Se relacionan moviéndose y trasladándose de un sitio a otro.
                        3.Partes de una célula
                        La célula consta de tres partes fundamentales: la membrana, el citoplasma y el núcleo.
                        a) La membrana
                        Es una película muy fina que rodea a la célula y la separa del exterior.
                        b) El citoplasma
                        Es una masa líquida donde se encuentran cavidades llenas de líquido y algunos orgánulos, granitos y filamentos.
                        c) El núcleo
                        Es un corpúsculo esférico situado generalmente en el centro de la célula. En su interior se encuentran los cromosomas. <br></br><br></br>

                        La célula vegetal
                        Las primeras células que se observaron fueron las vegetales, concretamente las de un trozo  
                        de corcho y se le llamaron células (celdillas) por tener el aspecto de las celdas de un panal.
                        Fueron descubiertas por el inglés Roberto Hooke en 1667.
                        Las células de las plantas se diferencian de las células animales básicamente en estos puntos:
                        – Tienen formas más regulares y generalmente son poligonales.       
                        – Son de mayor tamaño que las células animales.
                        – A diferencia de la membrana de la célula animal, están rodeadas por una pared muy gruesa.
                        – Poseen en su interior unos orgánulos llamados cloroplastos, los cuales contienen una
                        sustancia colorante llamada clorofila, que da el color verde a las hojas de las plantas y a los
                        tallos verdes. <br></br><br></br>

                    </p>
                </Col>
                <Col>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            /**AQUI VA EL LINK DE YOUTUBE */
                            url='https://youtu.be/aoj9oTvVJ8o'
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

export default celulas