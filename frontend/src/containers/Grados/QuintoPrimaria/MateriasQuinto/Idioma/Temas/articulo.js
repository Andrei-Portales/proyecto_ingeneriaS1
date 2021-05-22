import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
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

function articulo() {
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
            fileName={`El articulo Quinto Primaria`}
            creator="Educa Facil"

          >
            <h1 className="tituloT">El Articulo</h1>
            <p>
              <br></br><br></br>
              El artículo es la palabra que acompaña al sustantivo y siempre va delante de él. Es la palabra que funciona siempre como un determinante o identificador del sustantivo, esto es, señala si el sustantivo es conocido o no, e indica el género (femenino o masculino) y el número del sustantivo (singular o plural).
              Los artículos se dividen en definidos (o determinantes) e indefinidos (o indeterminantes).
              Los artículos definidos son aquellos que hablan de algo conocido y que se puedes identificar.
              Los artículos indefinidos son aquellos que hablan de algo no conocido o que no se puede identificar.
              <br></br><br></br>
              El artículo neutro “lo”
              Se usa para marcar abstracción, es decir, transforma adjetivos en sustantivos abstractos. No señala genero (femenino o masculino).
              El artículo neutro “lo” se utiliza solamente acompañado de adjetivos, adverbios o participios. Nunca va acompañando al nombre.

              <lu>Ejemplos:</lu>
              <li>–  Lo bueno es que tengo con quien compartir mi pena.</li>
              <li>–  ¿Has visto lo rápido que corre tu hermana?</li>
              <li>–  Admiro a mis amigos por lo leales que son.</li>
              <br></br><br></br>
            </p>

          </PDFExport>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              // /**AQUI VA EL LINK DE YOUTUBE */
              url="https://youtu.be/RvSpRaLvFSM"
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
    </Container>
  );
}

export default articulo;
