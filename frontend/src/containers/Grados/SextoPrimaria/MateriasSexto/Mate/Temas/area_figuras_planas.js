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

function area_figuras_planas() {
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
            fileName={`Area de figuras planas Sexto Primaria`}
            creator="Educa Facil"

          >

            <h1 className="tituloT">ÁREA DE FIGURAS PLANAS</h1>
            <p>
              <br />
              Rectángulo
              <br />
              Definición:  Un rectángulo es un cuadrilátero (figura de 4 lados), donde todos sus ángulos
              interiores son de 90 grados.
              <br />
              El área de un rectángulo se obtiene multiplicando el largo por el ancho.  Area = largo x ancho.
              <br />
              A = l * a
              <br />
              <br />
              Paralelogramo
              <br />
              Definición:  Un paralelogramo es un cuadrilátero con ambos pares de lados opuestos paralelos.
              Un rectángulo es un paralelogramo con los 4 ángulos de 90 grados.
              <br />
              El área de un paralelogramo se determina multiplicando la base por la altura.
              La altura siempre está a 90 grados con la base. (perpendicular)
              <br />
              <br />
              Área de un Triángulo
              <br />
              El área de un triángulo se obtiene multiplicando la base por la altura y luego
              dividir entre dos. La base y la altura tienen que estar a 90 grados.
              <br />
              A = (l * a)/2
              <br />
              <br />
            </p>
          </PDFExport>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              /** AQUI VA EL LINK DE YOUTUBE */
              url="https://www.youtube.com/watch?v=NNCvHedbz84"
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls="true"
            />
          </div>
          <Link to="/Ejer_Area_Figuras_Planas">
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

export default area_figuras_planas;
