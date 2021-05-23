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

function angulos() {
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
            fileName={`Angulos Sexto Primaria`}
            creator="Educa Facil"

          >

            <h1 className="tituloT">ÁNGULOS</h1>
            <p>
              <br />
              Un ángulo está formado por dos rayos que comienzan en el mismo punto.
              Los rayos  son los lados del ángulo y el punto es el vertice del ángulo.
              <br />
              <br />
              - Ángulo Agudo = Es un ángulo que mide menos de 90 grados.
              <br />
              - Ángulo Obtuso = Es un ángulo que mide mas de 90 grados pero menos de 180 grados.
              <br />
              - Ángulo Recto = Es un ángulo que mide exactamente 90 grados.
              <br />
              <br />
              - Ángulos Adyacentes = Dos ángulos que comparten un lado y un vértice pero uno de los
              ángulos no puede estar dentro del otro.
              <br />
              - Ángulos Complementarios =  Dos ángulos cuya suma de sus medidas es 90 grados.
              <br />
              - Ángulos Suplementarios =  Dos ángulos cuya suma de sus medidas es 180 grados.
              <br />
              - Par Lineal = Dos ángulos que son adyacentes y suplementarios.
              <br />
              <br />
            </p>
          </PDFExport>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              /** AQUI VA EL LINK DE YOUTUBE */
              url="https://www.youtube.com/watch?v=6wscEyBlPLA"
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

export default angulos;
