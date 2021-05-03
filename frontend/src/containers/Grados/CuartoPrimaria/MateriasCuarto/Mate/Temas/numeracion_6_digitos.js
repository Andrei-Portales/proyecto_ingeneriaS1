import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import './numeracion_6_digitos.css';

function numeracion_6_digitos() {
    return (
        <Container fluid className="grid">
            <Row justify="between" debug>
                <Col>
                    <h1 className="tituloT">Numeración hasta de 6 cifras</h1>
                    <p>
                        Los números nos sirven para contar seres, objetos . . ., cualquier cantidad de todo lo que nos rodea.
                        Para poder escribir cualquier número, hemos de usar caracteres o símbolos, que hemos de combinar
                        según unas reglas que forman lo que llamamos un sistema de numeración.<br></br><br></br>
                        A lo largo de la historia ha habido distintos sistemas de numeración, como el maya, el chino
                        o el sistema romano, con símbolos y reglas diferentes a los nuestros. Nuestro sistema de numeración
                        decimal procede de la India, aunque fueron los árabes los que lo introdujeron en Europa.<br></br><br></br>

                        Se llama sistema decimal porque 10 unidades de un orden cualquiera forman 1 unidad del orden
                        inmediato superior. Es así que:<br></br><br></br>
                        10 UM = 1DM<br></br>
                        10 DM = 1CM<br></br>
                        1 CM en cifras: 100 000<br></br>
                        1 CM en palabras: cien mil<br></br><br></br>

                        Ejemplo:<br></br><br></br>
                        3 CM = 300 000<br></br>
                        8 CM = 800 000<br></br><br></br>

                        UBICACIÓN EN EL TABLERO POSICIONAL<br></br><br></br>
                        Para ubicar los números en el tablero posicional comenzamos de derecha a izquierda comenzando
                        por las unidades (U), decenas (D), centenas (C), unidades de millar (UM), decenas de millas (DM) y
                        centenas de millar (CM).<br></br><br></br>

                        LECTURA Y ESCRITURA DE NÚMEROS HASTA LA CENTENA DE MILLAR<br></br><br></br>
                        Para leer cantidades, primero se leen los millares: centenas de millar (CM), decenas de millar (DM)
                        y unidades de millar (UM); y después se leen las centenas (C), decenas (D) y unidades (U).<br></br><br></br>

                        Ejemplo:<br></br><br></br>
                        Número<br></br>
                        863 574<br></br><br></br>
                        Lectura del número<br></br>
                        ochocientos sesenta y tres mil quinientos setenta y cuatro<br></br><br></br>

                        Para poder leer los números hasta la centena de millar es importante que formes grupos de tres
                        cifras; es decir, (teniendo en cuenta el ejemplo) 863 el espacio que encontramos se le puede
                        reemplazar con la palabra mil y luego, las últimas tres cifras 574.<br></br><br></br>

                        Para escribir los números hasta la centena de millar se puede seguir la misma recomendación.
                        Comienza de izquierda a derecha con el número que está antes de la palabra mil, (863) el espacio
                        que se deja es por la palabra mil y luego escribe el número que sigue (574).<br></br><br></br>

                        DESCOMPOSICIÓN DE UN NÚMERO<br></br><br></br>
                        Los números se pueden descomponer:<br></br><br></br>
                        • Descomposición según su valor posicional:<br></br>
                        462 921 = 4CM + 6DM + 2UM + 9C + 2D + 1U<br></br>
                        936 705 = 9CM + 3DM + 6UM + 7C + 5U<br></br><br></br>

                        • Descomposición en unidades:<br></br>
                        725 634 = 700 000 + 20 000 + 5 000 + 600 + 30 + 4<br></br>
                        876 341 = 800 000 + 70 000 + 6 000 + 300 + 40 + 1<br></br><br></br>
                    </p>
                </Col>
                <Col>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            /**AQUI VA EL LINK DE YOUTUBE */
                            url='https://www.youtube.com/watch?v=N53kLFaGqA8'
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

export default numeracion_6_digitos
