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

function energia() {

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
            fileName={`Energia Sexto Primaria`}
            creator="Educa Facil"

          >


            <h1 className="tituloT"> La Energia </h1>
            <p>
              <br></br><br></br>
              El término energía, tiene diversas acepciones y definiciones, relacionadas con la idea de una capacidad para obrar, transformar o poner en movimiento. En física, «energía» se define como la capacidad para realizar un trabajo. En tecnología y economía, «energía» se refiere a un recurso natural (incluyendo a su tecnología asociada) para extraerla, transformarla, y luego darle un uso industrial o económico.
              <br></br><br></br>
              La energía es todo aquello que puede producir cambios en las cosas, es invisible, no ocupa espacio ni tiene masa. No es materia.
              <br></br><br></br>
              La energía tiene como propiedad fundamental que puede transformarse en otras. El ser humano ha aprendido a transformar todas estas formas de energía en energía eléctrica que llega a nuestros hogares, a las industrias, etc, a través de cables conductores. Esta electricidad se puede transformar en luz mediante lámparas, en calor mediante aparatos calefactores y en movimiento mediante motores.
              De hecho, la energía es necesaria para que cualquier cosa funcione. Hay energía en todo aquello que cambia o produce cambios a su alrededor. En cualquier actividad que realicemos, nos es imprescindible y necesaria la energía en cualquiera de sus formas.

              La energía está en continua transformación. Piensa en una bombilla: la energía eléctrica se transforma en energía luminosa y en energía calorífica. La energía química del motor de un coche, se transforma en energía mecánica que posibilita que el motor se mueva y consecuentemente también el coche.
            </p>
          </PDFExport>

        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              // /**AQUI VA EL LINK DE YOUTUBE */
              url="https://youtu.be/NAPAMIpGB-s"
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls="true"
            />
          </div>
          <Link to="/Ejer_energia">
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

export default energia;