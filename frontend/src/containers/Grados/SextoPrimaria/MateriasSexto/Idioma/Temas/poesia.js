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

function poesia() {
  const container = React.useRef(null);
  const pdfExportComponent = React.useRef(null);
  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };
  const exportPDFWithMethod = () => {
    let element = container.current || document.body;
    savePDF(element, {
      paperSize: "auto",
      margin: 40,
      fileName: `Report for ${new Date().getFullYear()}`,
    });
  };

  return (
    <Container fluid className="tema-container">


      <Row>




        <Col className="left-section" sm={12} md={7} lg={6}>
          <PDFExport
            ref={pdfExportComponent}
            paperSize="auto"
            margin={40}
            fileName={`Poesia Sexto Primaria`}
            creator="Educa Facil"

          >
            <h1 className="tituloT"> La Poesía </h1>
            <p>
              <br></br><br></br>
              La poesía es un género literario que se caracteriza por ser la más depurada manifestación, por medio de la palabra, de los sentimientos, emociones y reflexiones que puede expresar el ser humano en torno a la belleza, el amor, la vida o la muerte.Como tal, puede estar compuesta tanto en verso como en prosa.
              <br></br><br></br>
              Antiguamente, la poesía se escribía únicamente en versos, rigiéndose por un conjunto de normas sobre la composición denominada métrica.
              <br></br><br></br>
              Según la métrica, los versos se formaban por un número fijo de sílabas (tetrasílabo, hexasílabo, alejandrino, etc.), una determinada distribución de los acentos y una rima, que darían como resultado un ritmo y un tipo de composición particular: copla, seguidilla, redondilla, cuarteto, etc.
              Sin embargo, la poesía moderna se caracteriza por el predominio del verso libre, donde el autor tiene libertad total para disponer y organizar los versos en el texto, y buscar su propio ritmo, sin ataduras de rimas o métricas.

            </p>
          </PDFExport>
        </Col>


        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              // /**AQUI VA EL LINK DE YOUTUBE */
              url="https://youtu.be/Ow7YxOYqC2c"
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

export default poesia;