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

function hiato() {
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
            fileName={`Hiato Sexto Primaria`}
            creator="Educa Facil"

          >
            <h1 className="tituloT"> Hiato </h1>
            <p>
              <br></br><br></br>
              El hiato es el encuentro de 2 vocales que se pronuncian en sílabas distintas. El término hiato es de origen latín hiatus que significa “abertura” o “separación”
              <br></br><br></br>
              En la gramática, es importante resaltar que las vocales fuertes o abiertas son A, E, O y, las vocales débiles o cerradas son I y U.
              <br></br><br></br>
              <lu>En virtud de lo anterior, el hiato puede ser:</lu>
              <li>Hiato simple</li>
              se presenta con la unión de 2 vocales fuertes o 2 vocales débiles, por ejemplo: mu-se-o, po-e-ma, entre otros.
              <li>Hiato acentual</li>
              se observa con la unión de una vocal débil tónica con una vocal fuerte átona o viceversa, siempre y cuando la vocal débil lleve el acento tónico como: son-rí-e, ca-í-da, fi-lo-so-fí-a, etcétera.
              Cabe resaltar, que la letra “H” entre 2 vocales no impide que se forme el hiato, por ejemplo: bú-ho.
            </p>
          </PDFExport>

        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              // /**AQUI VA EL LINK DE YOUTUBE */
              url="https://youtu.be/VMJi53lnYoM"
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls="true"
            />
          </div>
          <Link to="/Ejer_hiato">
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

export default hiato;
