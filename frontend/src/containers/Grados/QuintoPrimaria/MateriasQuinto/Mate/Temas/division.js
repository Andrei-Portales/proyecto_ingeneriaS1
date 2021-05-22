import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import './division.css';
import '../../../../../Buttons/newbtns.scss';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

function division() {
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
                        fileName={`Division Quinto Primaria`}
                        creator="Educa Facil"

                    >
                        <h1 className="tituloT">Division</h1>
                        <p>
                            <br></br><br></br>
                            Una división es una operación matemática que consiste en dividir un número en partes iguales.
                            Una división tiene diferentes partes, llamadas términos. Los términos de la división son: <br></br><br></br>
                            <li>DIVIDENDO: es el número que vamos a dividir</li>
                            <li>DIVISOR: es el número que divide al dividendo, es decir la cantidad de partes en la que queremos dividir al dividendo.</li>
                            <li>COCIENTE: es el resultado de la operación</li>
                            <li>RESTO: es la parte que sobra, es decir que no se ha podido distribuir.</li> <br></br><br></br>

                        </p>

                    </PDFExport>
                </Col>
                <Col sm={12} md={5} lg={6}>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            /**AQUI VA EL LINK DE YOUTUBE */
                            url='https://youtu.be/mQ4wKV9_pZs'
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

export default division