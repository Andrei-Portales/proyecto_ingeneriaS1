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

function multiplos_divisores() {
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
            fileName={`Multiplos y divisores Cuarto Primaria`}
            creator="Educa Facil"

          >

            <h1 className="tituloT">MULTIPLOS Y DIVISORES</h1>
            <p>
              MÚLTIPLOS
              <br />
              <br />
              Miss Lili premia con dos stickers cada punto que obtienen en el examen los alumnos de su clase.
              <br />
              - El conjunto de los productos 0; 2; 4; 6; 8; 10; 12; 14; 16; 18; ... son múltiplos
              de 2.
              <br />
              - Los múltiplos de un número se obtiene al multiplicar dicho número por otro cualquiera.
              <br />
              - Los múltiplos de un número son infinitos.
              <br />
              - El cero es múltiplo de todos los números.
              <br />
              DIVISORES
              <br />
              <br />
              Los números 1; 2; 3; 4; 6; 9; 12; 18 y 36 son divisores de 36.
              <br />
              - Los divisores o factores de un número son aquellos que dividen exactamente otros.
              <br />
              - El número uno es divisor de todos los números.
              <br />
              - Los divisores de un número forman un conjunto finito.
              <br />
              NÚMEROS PRIMOS
              <br />
              Son aquellos que tienen dos divisores, el mismo número y la unidad.
              <br />
              <br />
              NÚMEROS COMPUESTOS
              <br />
              Son aquellos que tienen más de dos divisores.
              <br />
              <br />
            </p>
          </PDFExport>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              /** AQUI VA EL LINK DE YOUTUBE */
              url="https://www.youtube.com/watch?v=dKravJll7Yw"
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls="true"
            />
          </div>
          <Link to="/Ejer_Multiplos_Divisores">
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

export default multiplos_divisores;
