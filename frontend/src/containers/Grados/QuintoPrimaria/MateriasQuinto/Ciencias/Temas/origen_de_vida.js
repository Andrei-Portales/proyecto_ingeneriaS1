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

function origen_de_vida() {
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
            fileName={`Origen de la vida Quinto Primaria`}
            creator="Educa Facil"

          >

            <h1 className="tituloT">Origen de la Vida</h1>
            <p>
              <br></br><br></br>
              ¿Cómo se originó la vida en la Tierra? Esta pregunta muchas personas, dedicadas a la
              ciencia o no, trataron de responder por medio de teorías; muchas de las cuales no son
              consideradas válidas actualmente.<br></br><br></br>

              Una de las teorías que se mantuvo vigente por más tiempo fue la teoría de la
              abiogénesis o teoría de la generación espontánea, que sostiene que diferentes
              formas de vida pueden originarse a partir de la materia sin vida, por
              transformaciones espontáneamente. <br></br><br></br>

              La abiogénesis fue aceptada desde que Aristóteles la propuso, en el siglo IV a.
              C., hasta el siglo XVII, en que algunos científicos comenzaron a ponerla en
              duda. Pero recién en el siglo XIX se demostró su falsedad de forma definitiva.
              La teoría de la generación espontánea se basó en observaciones de fenómenos,
              cuya interpretación no era correcta por carecer de datos suficientes. Las
              personas veían cómo restos de alimentos se cubrían de gusanos en unos días o
              cómo aparecían renacuajos en charcas vacías y pensaban que esto se debía a
              Teorías sobre el origen de la vida: generación espontánea y biogenésistransformaciones
              de la materia inerte. Muchos científicos, como Van Helmont y Needham, suponían que existía
              una fuerza vital o principio activo en la materia inanimada, responsable de las transformaciones. <br></br><br></br>

            </p>
          </PDFExport>

        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              // /**AQUI VA EL LINK DE YOUTUBE */
              url="https://youtu.be/9YTjqVGvHSs"
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

export default origen_de_vida;
