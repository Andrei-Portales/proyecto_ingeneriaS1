import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import './propor.css';
import '../../../../../Buttons/newbtns.scss';

function propor() {
    return (
        <Container fluid className="grid">
            <Row justify="between" debug>
                <Col sm={12} md={7} lg={6}>
                    <h1 className="tituloT">Proporciones</h1>
                    <p>
                        <br></br><br></br>
                        En matemáticas, se conoce como proporción a la relación de igualdad que existe entre dos razones, es decir, entre dos comparaciones entre dos cantidades determinadas. O sea: si a/b es una razón, entonces la igualdad a/b = c/d será una proporción.
                        <li>Por ejemplo:</li> 
                        Si un negocio de venta de pizza tiene una ganancia de $15.000 y un gasto de $5.000, podremos decir que la empresa tiene una razón de 3. Del mismo modo,
                        si a este negocio le cuesta $20 elaborar dos pizzas (20/2 = 10), de modo que elaborar cuatro pizzas costaría $40 (40/4 = 10). Si ambas razones se expresan en una fórmula: 20/2 = 40/4. He allí una proporción.
                        <br></br><br></br>

                        <ul>Tipos de proporcionalidad</ul>

                        Podemos decir que una proporción se da en las situaciones matemáticas en que los valores de dos magnitudes dependen el uno del otro de manera directa (proporcionalidad directa). Así, cuando uno de los valores de la relación aumente, el otro lo hará también necesariamente, como es por ejemplo la relación entre temperatura y energía: a mayor temperatura, se registra mayor energía y viceversa.
                        En cambio, en una relación en que el aumento de uno de los términos acarrea la disminución del otro, se dice que estamos ante una proporcionalidad inversa. Esto puede expresarse como que dos términos son inversamente proporcionales: cuando uno sube el otro baja, y viceversa. Tal es la relación entre velocidad y tiempo: a mayor velocidad menor tiempo tardaremos en llegar a nuestro destino, y viceversa.
                        <br></br><br></br>
                    </p>
                </Col>
                <Col sm={12} md={5} lg={6}>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            /**AQUI VA EL LINK DE YOUTUBE */
                            url='https://youtu.be/0jUM-p1QyOE'
                            className='react-player'
                            playing
                            width='100%'
                            height='100%'
                            controls='true'
                        />
                    </div>
                    <button className= "btnEjercicios">
                     EJERCICIOS
                    </button>
                    <button className= "btnDescargar">
                      DESCARGAR
                    </button>
                </Col>
            </Row>


        </Container>
    )
}

export default propor