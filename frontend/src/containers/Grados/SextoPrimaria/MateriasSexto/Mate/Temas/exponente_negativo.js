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

function exponente_negativo() {
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
            fileName={`Exponente negativo Sexto Primaria`}
            creator="Educa Facil"

          >

            <h1 className="tituloT">EXPONENTE NEGATIVO</h1>
            <p>
              <br />
              Un exponente negativo nos indica cuántas veces dividir por ese número.
              <br />
              Ejemplos:
              <br />
              8^-1 = 1 ÷ 8 = 1/8 = 0,125
              <br />
              5^-3 = 1 ÷ 5 ÷ 5 ÷ 5 = 0,008
              <br />
              <br />
              Pero se puede hacer de una forma más fácil:
              <br />
              5^-3 = 1 ÷ (5 × 5 × 5) = 1/5^3 = 1/125 = 0,008
              <br />
              <br />
              El último ejemplo nos mostró una forma más simple de manejar exponentes negativos:
              <br />
              Calcula el exponente (a^n)
              <br />
              Luego utiliza su recíproco (1/a^n)
              <br />
              <br />
              Para cambiar el signo (más a menos, o menos a más) del exponente se usa el recíproco.
              <br />
              <br />
            </p>
          </PDFExport>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              /** AQUI VA EL LINK DE YOUTUBE */
              url="https://www.youtube.com/watch?v=ti73Q4Uy1Fk"
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

export default exponente_negativo;
