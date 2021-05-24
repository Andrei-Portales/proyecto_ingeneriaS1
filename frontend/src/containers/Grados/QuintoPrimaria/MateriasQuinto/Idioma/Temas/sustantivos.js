import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import { Link } from 'react-router-dom';
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

function sustantivos() {
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
            fileName={`Sustantivos`}
            creator="Educa Facil"

          >

            <h1 className="tituloT">Sustantivos</h1>
            <p>
              <br></br><br></br>
              Como sustantivo (también escrito substantivo) se denomina la clase de palabras que se emplean para designar seres, entidades u objetos.
              <br></br><br></br>
              En gramática, los sustantivos son el tipo de palabras que se caracterizan por tener género (masculino y femenino) y número (singular y plural), que forman sintagmas nominales, y pueden funcionar como argumento verbal o como complementos del nombre.
              <br></br><br></br>
            </p>
          </PDFExport>

        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              // /**AQUI VA EL LINK DE YOUTUBE */
              url="https://youtu.be/g6Vzr0d7i84"
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls="true"
            />
          </div>
          <Link to="/Ejer_sustantivo">
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

export default sustantivos