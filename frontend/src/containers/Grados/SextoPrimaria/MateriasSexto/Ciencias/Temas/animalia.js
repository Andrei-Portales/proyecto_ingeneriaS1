import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player/lazy';
import '../../../../../Buttons/newbtns.scss';
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

function animalia() {

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
        <Col className="left-section" sm={12} md={7} lg={6}>
          <PDFExport
            ref={pdfExportComponent}
            paperSize="auto"
            margin={40}
            fileName={`Animalia Sexto Primaria`}
            creator="Educa Facil"

          >


            <h1 className="tituloT"> Reino Animal </h1>
            <p>
              <br></br><br></br>
              El reino animal o animalia constituye, junto al reino vegetal, fungi, protistas y moneras, uno de los posibles en que la biología clasifica a las formas de vida conocida. Es uno de los grandes reinos tradicionales, a pesar de que la clasificación ha variado notoriamente a lo largo de más de 200 años de intentos de clasificación.
              <br></br><br></br>
              Las criaturas contenidas en este reino se llaman animales, y se caracterizan por tener una enorme diversidad ecológica, morfológica y conductual, ya que se hallan presentes a lo largo y ancho del planeta. Al mismo tiempo, se distinguen de los otros reinos eucariotas por carecer de clorofila (no hacen fotosíntesis) y pared celular (presente en células de plantas y hongos), así como por su reproducción casi enteramente sexual y su capacidad de movimiento autónomo y voluntario.
              <br></br><br></br>
              Al reino animal pertenecen alrededor de dos millones de especies distintas en todo el mundo, agrupados en varios taxones o filos, y en dos grandes categorías: vertebrados e invertebrados. En este reino, además, se clasifica también clasificado el ser humano.
            </p>
          </PDFExport>

        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              // /**AQUI VA EL LINK DE YOUTUBE */
              url="https://youtu.be/GVABbwnEDLU"
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls="true"
            />
          </div>
          <Link to="/Ejer_animalia">
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

export default animalia;