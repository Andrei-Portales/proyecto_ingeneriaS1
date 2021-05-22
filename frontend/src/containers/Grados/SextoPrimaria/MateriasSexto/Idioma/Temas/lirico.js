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

function lirico() {
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
            fileName={`Genero Lirico Sexto Primaria`}
            creator="Educa Facil"

          >


            <h1 className="tituloT"> Género Lírico </h1>
            <p>
              <br></br><br></br>
              Se llama género lírico porque en la antigua Grecia este tipo de composiciones se cantaban, acompañándose con un instrumento llamado lira.​ Su forma más habitual es el verso y la primera persona. Comunica las más íntimas vivencias del hombre, lo subjetivo, los estados anímicos.
              <br></br><br></br>
              En su concepto más vasto comprende además de la oda, la canción, la balada, la elegía, el soneto e incluso las piezas de teatro destinadas a ser cantadas, como las óperas y dramas líricos. En lenguaje usual, sin embargo, designa casi exclusivamente la oda que, según las formas que reviste toma los nombres de ditirambo, himno, cantata, cántico, etc.
              La métrica y el ritmo de los poemas dependen exclusivamente del poeta o el escritor.
              <br></br><br></br>
              Además de transmitir sentimientos, lo hace por medio de imágenes poéticas creadas con palabras cuidadosamente escogidas.
              Su expresión principal es el poema que (voz poética y objeto lírico) expresa emociones y pensamientos que es el objeto lírico.

            </p>
          </PDFExport>

        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              // /**AQUI VA EL LINK DE YOUTUBE */
              url="https://youtu.be/1YnmgtPSiR0"
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

export default lirico