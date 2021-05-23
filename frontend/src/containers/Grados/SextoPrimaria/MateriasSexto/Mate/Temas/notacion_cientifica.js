/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import '../../../../estilo-temas.scss'; // Es el mismo estilo para todos los temas y ahorrar codigo
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

const Container = styled.div`
background-color: ${({ theme }) => theme.content} !important;
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

function notacion_cientifica() {
  const container = React.useRef(null);
  const pdfExportComponent = React.useRef(null);
  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };
  return (
    <Container fluid className="tema-container">
      <Row>
        <Col className="right-section" sm={12} md={7} lg={6}>
          <PDFExport
            ref={pdfExportComponent}
            paperSize="auto"
            margin={40}
            fileName={`Poesia Sexto Primaria`}
            creator="Educa Facil"

          >

            <h1 className="tituloT">NOTACIÓN CIENTÍFICA</h1>
            <p>
                <br />
                La notación científica se utiliza para expresar números muy grandes o muy pequeños. 
                Para hacerlo se usan potencias de diez.
                <br />
                Un número en notación científica se escribe como el producto de un número (entero o decimal) 
                y una potencia de 10. La potencia de diez indicará cuantos lugares se deberá mover el punto decimal. 
                <br />
                El número tiene un dígito a la izquierda del punto decimal.
                <br />
                <br />
                Pasar de Notación Científica a Notación Estándar
                <br />
                Ejemplo 1:
                <br />
                3.8 x 10^4 = 3800
                <br />
                El decimal deberá ser mayor o igual a 1 pero menor que 10.
                <br />
                <br />
                Ejemplo 2:
                <br />
                3.8 x 10^-4 = 0.00038
                <br />
                <br />
                Pasar de Notación Estándar a Notación Científica
                <br />
                Ejemplo 3:
                <br />
                43,500,000 = 4.35 x 10^7
                <br />
                Ejemplo 4:
                <br />
                0.00000523 = 5.23 x 10^-6
                <br />
                <br />
            </p>
          </PDFExport>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              /** AQUI VA EL LINK DE YOUTUBE */
              url="https://www.youtube.com/watch?v=qjX4wKUoK7E"
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls="true"
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
    </Container >
  );
}

export default notacion_cientifica;
