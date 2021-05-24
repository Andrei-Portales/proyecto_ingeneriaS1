import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import { Link } from 'react-router-dom';
import './fracciones.css';
import '../../../../../Buttons/newbtns.scss';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

function fracciones() {
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
                        fileName={`Fracciones`}
                        creator="Educa Facil"

                    >
                        <h1 className="tituloT">Fracciones</h1>
                        <p>
                            <br></br><br></br>
                            Una fracción es un número, que se obtiene de dividir un entero en partes iguales. Por ejemplo cuando decimos una cuarta parte de la torta, estamos dividiendo  la torta en cuatro partes y consideramos una de ellas.
                            Una fracción se representa matemáticamente por números que están escritos uno sobre otro y que se hallan separados por una línea recta horizontal llamada raya fraccionaria.
                            La fracción está formada por dos términos: el numerador y el denominador. El numerador es el número que está sobre la raya fraccionaria y el denominador es el que está bajo la raya fraccionaria.
                            El numerador es el número de partes que se considera de la unidad o total.
                            El denominador es el número de partes iguales en que se ha dividido la unidad o total.
                            <br></br><br></br>

                        </p>

                    </PDFExport>
                </Col>
                <Col sm={12} md={5} lg={6}>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            /**AQUI VA EL LINK DE YOUTUBE */
                            url='https://youtu.be/LgMptyzudXU'
                            className='react-player'
                            playing
                            width='100%'
                            height='100%'
                            controls='true'
                        />
                    </div>
                    <Link to="/Ejer_fracc">
                    <button className="btnEjercicios" >
                        EJERCICIOS
                    </button>
                    </Link>
                    <button className="btnDescargar" onClick={exportPDFWithComponent}>
                        DESCARGAR
                    </button>

                </Col>
            </Row>


        </Container>
    )
}

export default fracciones