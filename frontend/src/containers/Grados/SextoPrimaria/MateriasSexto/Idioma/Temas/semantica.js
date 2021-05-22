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

function semantica() {
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
            fileName={`La Semantica Sexto Primaria`}
            creator="Educa Facil"

          >
            <h1 className="tituloT"> La Semántica </h1>
            <p>
              <br></br><br></br>
              Se denomina como semántica a la ciencia lingüística que estudia el significado de las palabras y expresiones, es decir, lo que las palabras quieren decir cuando hablamos o escribimos.
              <br></br><br></br>
              La finalidad de la semántica es descomponer el significado en unidades más pequeñas, llamadas semas o rasgos semánticos, estos permiten segmentar el significado de las palabras, y diferenciar palabras de significado parecido y palabras de significado opuesto
              <br></br><br></br>
              Por otro lado, la semántica lingüística se encarga de estudiar la denotación y connotación de las palabras, cuando el mensaje se expresa objetivamente, se dice que su significa es denotativo y, cuando a la comunicación objetiva se le añade alguna valoración personal mediante gestos o entonación, se habla de que su significado es connotativo.
            </p>
          </PDFExport>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              // /**AQUI VA EL LINK DE YOUTUBE */
              url="https://youtu.be/pGg_ePbMbMU"
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

export default semantica;
