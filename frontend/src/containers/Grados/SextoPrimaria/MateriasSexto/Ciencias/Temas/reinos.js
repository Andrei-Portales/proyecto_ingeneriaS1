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

function reinos() {

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
            fileName={`Reinos Sexto Primaria`}
            creator="Educa Facil"

          >


            <h1 className="tituloT"> Clasificacion de los Seres Vivos  </h1>
            <p>
              <br></br><br></br>
              En la naturaleza existen millones de seres vivos diferentes. Los seres vivos se clasifican
                en grandes grupos llamados reinos. Existen cinco reinos: el  reino animal (animales), el
                reino vegetal (plantas), el reino hongos (setas, mohos y levaduras), el reino protoctistas
                (protozoos y algas) y el reino móneras (bacterias).
              <li>
              REINO VEGETAL
              </li>
              <li>
              REINO ANIMAL
              </li>
              <li>
              REINO HONGOS
              </li>
              <li>
              REINO PROTOCTISTAS
              </li>
              <li>
              REINO MÓNERAS
              </li>

            </p>
          </PDFExport>

        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              // /**AQUI VA EL LINK DE YOUTUBE */
              url="https://youtu.be/GS34snY_P4o"
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls="true"
            />
          </div>
          <Link to="/Ejer_reinos">
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

export default reinos;