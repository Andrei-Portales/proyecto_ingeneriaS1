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

function operaciones_conjuntos() {
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

            <h1 className="tituloT">OPERACIONES CON CONJUNTOS</h1>
            <p>
                INTERSECCIÓN DE CONJUNTOS
                <br />
                <br />
                La intersección de dos o más conjuntos es el conjunto formado por los elementos que pertenecen
                simultáneamente a dichos conjuntos; es decir, los elementos comunes.
                <br />
                La notación A  B se lee: A intersección B.
                <br />
                <br />
                * Ejemplo:
                <br />
                A = [4; 5; 3; 2]
                <br />
                B = [3; 8; 1; 2; 10]
                <br />
                A  B = [2; 3]
                <br />
                <br />
                UNIÓN DE CONJUNTOS
                <br />
                <br />
                La unión de dos o más conjuntos está formada por un nuevo conjunto que agrupa 
                todos los elementos de dichos conjuntos.
                <br />
                La notación A  B se lee: A unión B.
                <br />
                <br />
                * Ejemplo:
                <br />
                A = [a, e, i, o, u]
                <br />
                B = [m, n, t, d, s]
                <br />
                A  B = [a, e, i, o, u, m, n, t, d, s]
                <br />
                <br />
                DIFERENCIA DE CONJUNTOS
                <br />
                <br />
                La diferencia de conjuntos consiste en que si al conjunto A le quitamos el conjunto B 
                solo nos quedarían los elementos que pertenecen únicamente al conjunto A.
                <br />
                La notación A - B se lee: A diferencia B.
                <br />
                <br />
                * Ejemplo:
                <br />
                M = [a, c, i, h]
                <br />
                N = [b, d, e, f, i, h]
                <br />
                M - N = [a, c]
                <br />
                N - M = [b, d, e, f]
                <br />
                <br />
            </p>
          </PDFExport>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              /** AQUI VA EL LINK DE YOUTUBE */
              url="https://www.youtube.com/watch?v=NpvzONXF9IQ"
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

export default operaciones_conjuntos;
