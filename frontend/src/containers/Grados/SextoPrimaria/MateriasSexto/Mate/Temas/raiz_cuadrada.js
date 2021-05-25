/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
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

function raiz_cuadrada() {
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
            fileName={`Raiz Cuadrada Sexto Primaria`}
            creator="Educa Facil"

          >

            <h1 className="tituloT">RAÍZ CUADRADA</h1>
            <p>
              <br />
              La raíz cuadrada de un número se define como un número que se  multiplique por sí mismo
              dos veces cuyo resultado sea el número  evaluado.
              <br />
              Ejemplo:
              <br />
              raíz cuadrada de 9 = 3       porque 3^2 = 9
              <br />
              raíz cuadrada de 25 = 5
              <br />
              <br />
              La raíz cúbica de un número se define como un número que se multiplique por sí mismo
              tres veces cuyo resultado sea el número evaluado.
              <br />
              Ejemplo:
              <br />
              raíz cúbica de 8 = 2       porque 2^3 = 8
              <br />
              <br />
            </p>
          </PDFExport>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              /** AQUI VA EL LINK DE YOUTUBE */
              url="https://www.youtube.com/watch?v=77316z_EGCg"
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls="true"
            />
          </div>
          <Link to="/Ejer_Raiz_Cuadrada">
          <button className="btnEjercicios" >
            EJERCICIOS
          </button>
          </Link>
          <button className="btnDescargar" onClick={exportPDFWithComponent}>
            DESCARGAR
          </button>
        </Col>
      </Row>
    </Container >
  );
}

export default raiz_cuadrada;
