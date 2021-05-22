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

function oracion() {
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
            fileName={`Oracion Quinto Primaria`}
            creator="Educa Facil"

          >

            <h1 className="tituloT">Oracion</h1>
            <p>
              <br></br><br></br>
              En gramática y sintaxis, se denomina oración a un conjunto ordenado y lineal de palabras, que expresan en su totalidad una información completa y reconocible. Se trata de la unidad más pequeña del discurso, la cual constituye un enunciado autónomo, es decir, una proposición lógica que incluso si la sacamos de su contexto, continuará expresando una información.

              <br></br><br></br>
              La oración es una de las estructuras del lenguaje verbal que más se ha estudiado a lo largo de la historia de la lingüística, desde distintas aproximaciones, tanto morfosintácticas como semánticas y fonológicas, dado que es una estructura común a todos los idiomas. Sin embargo, y como es lógico, la forma y la entonación de las oraciones puede variar significativamente de una lengua a otra.
              Además, así como las palabras juntas componen una oración, habitualmente en los textos las oraciones juntas componen un párrafo, que sería una unidad mucho mayor de sentido, abarcando un número variable de enunciados.

              <br></br><br></br>
            </p>

          </PDFExport>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              // /**AQUI VA EL LINK DE YOUTUBE */
              url="https://youtu.be/W9vn4PU7e9Y"
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

export default oracion;
