import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import './val_posi.css';
import '../../../../../Buttons/newbtns.scss';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

function val_posi() {
    const container = React.useRef(null);
    const pdfExportComponent = React.useRef(null);
    const exportPDFWithComponent = () => {
        if (pdfExportComponent.current) {
            pdfExportComponent.current.save();
        }
    };


    return (
        <Container fluid className="grid">
            <Row justify="between" debug>
                <Col sm={12} md={7} lg={6}>

                    <PDFExport
                        ref={pdfExportComponent}
                        paperSize="auto"
                        margin={40}
                        fileName={`Valor Posicional Quinto Primaria`}
                        creator="Educa Facil"

                    >

                        <h1 className="tituloT">Valor Posicional</h1>
                        <p>
                            <br></br><br></br>
                            El valor posicional es el valor que toma un dígito de acuerdo con la posición que ocupa dentro del número (unidades, decenas, centenas…).
                            Es por ello que el cambio de posición de un dígito dentro de un número altera el valor total del mismo.
                            De este modo, al operar y enseñar a hacer operaciones se puede hacer trabajando sólo con las cifras o
                            con el valor posicional de las mismas. Esta segunda opción, trabajar con el valor posicional, ayuda a comprender el
                            por qué de los algoritmos utilizados de forma tradicional.
                            <br></br><br></br>
                            Empezamos a contar sin problemas hasta que llegamos al .  Cuando queremos contar una unidad más, hacemos un grupo que representamos con un  a la izquierda del  y transformamos el nueve en un cero, obteniendo la cifra .
                            Esto quiere decir que los números escritos en la segunda posición de la izquierda no representan unidades, sino grupos de diez unidades.  Por ejemplo, el número  quiere decir que se han hecho dos grupos de diez monedas.  ¿Qué quiere decir el número ?  Que se formaron cuatro grupos de diez monedas y cinco monedas más.
                            Por esta razón nuestro sistema de numeración se llama posicional, pues el valor que representa cada dígito depende de la posición que ocupe en la cifra.
                            <br></br><br></br>
                        </p>

                    </PDFExport>
                </Col>
                <Col sm={12} md={5} lg={6}>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            /**AQUI VA EL LINK DE YOUTUBE */
                            url='https://youtu.be/eNodAB9v6YM'
                            className='react-player'
                            playing
                            width='100%'
                            height='100%'
                            controls='true'
                        />
                    </div>
                    <button className="btnEjercicios" >
                        EJERCICIOS
                    </button>
                    <button className="btnDescargar" onClick={exportPDFWithComponent}>
                        DESCARGAR
                    </button>

                </Col>
            </Row>


        </Container>
    )
}

export default val_posi