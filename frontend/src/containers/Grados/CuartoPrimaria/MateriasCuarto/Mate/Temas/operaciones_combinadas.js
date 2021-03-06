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

function operaciones_combinadas() {
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
            fileName={`Operaciones Combinadas Cuarto Primaria`}
            creator="Educa Facil"

          >
            <h1 className="tituloT">OPERACIONES COMBINADAS</h1>
            <p>
              SABÍAS QUE . . .
              <br />
              . . . Thales fue un ilustre matemático griego a quien se le conoce como
              el "Padre de la Matemática Griega" y es considerado como uno de los "Siete Sabios"
              de la antigüedad.
              <br />
              <br />

              Al desarrollar ejercicios de operaciones combinadas se tiene en cuenta el orden de jerarquía y se
              presentan dos casos:
              <br />
              <br />
              1. Sin paréntesis se procede así:
              <br />
              a. Se resuelven las potencias.
              <br />
              b. Luego, las multiplicaciones y divisiones en el orden que
              aparecen.
              <br />
              c. Finalmente, las adiciones y sustracciones en el orden en
              que aparecen.
              <br />
              <br />
              2. Con paréntesis se procede así:
              <br />
              a. Se resuelven en primer lugar las operaciones que se
              encuentran dentro de los paréntesis.
              <br />
              b. Luego, se resuelve aplicando el proceso anterior.
              <br />
              <br />
            </p>

          </PDFExport>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              /** AQUI VA EL LINK DE YOUTUBE */
              url="https://www.youtube.com/watch?v=v0PZy_Jxhww"
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls="true"
            />
          </div>
          <Link to="/Ejer_Operaciones_Combinadas">
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
  );
}

export default operaciones_combinadas;
