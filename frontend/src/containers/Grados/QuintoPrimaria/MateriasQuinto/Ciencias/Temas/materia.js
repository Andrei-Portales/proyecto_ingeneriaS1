/* eslint-disable max-len */
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

function materia() {
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
            fileName={`Cambios en la materia Quinto Primaria`}
            creator="Educa Facil"

          >


            <h1 className="tituloT">Cambios en la Materia</h1>
            <p>
              <br></br><br></br>
              El estado en el cual se encuentra en particular una sustancia depende de dos factores o condiciones que son la temperatura y la presión por lo tanto si se modifica algunas de estas variables o las dos, la materia puede pasar de un estado a otro.
              Los cambios en la materia son:
              <li>Fusión: es cuando un sólido se transforma en líquido.</li>
              <li>Vaporización: es cuando un líquido se transforma en gas.</li>
              <li>Cristalización: es el cambio de la materia del estado gaseoso al estado sólido sin pasar por el estado líquido.</li>
              <li>Solidificación: es el cambio de estado de la materia de líquido a sólido.</li>
              <li>Sublimación: es el cambio de estado de la materia sólida al estado gaseoso sin pasar por el estado líquido.</li>
              <li>Condensación: es el cambio de estado que se produce en una sustancia al pasar del estado gaseoso al estado líquido.</li>
              <br></br><br></br>
            </p>
          </PDFExport>

        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              // /**AQUI VA EL LINK DE YOUTUBE */
              url="https://youtu.be/x2nKoFYolj8"
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls="true"
            />
          </div>
          <Link to="/Ejer_Materia">
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

export default materia