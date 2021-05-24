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

function fig_lit() {
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
            fileName={`Figuras Literarias Quinto Primaria`}
            creator="Educa Facil"

          >
            <h1 className="tituloT">Figuras Literarias</h1>
            <p>
              <br></br><br></br>
              Las figuras literarias, también conocidas como figuras retóricas, son formas no convencionales de emplear las palabras para dotarlas de expresividad, vivacidad o belleza, con el objeto de sorprender, emocionar, sugerir o persuadir.
              <br></br><br></br>
              Las figuras literarias son típicas del discurso literario y de sus distintos géneros (poesía, narrativa, ensayo, drama), en los cuales el lenguaje es un fin en sí mismo, y es transformado para potenciar sus posibilidades expresivas.
              No obstante, las figuras literarias no son exclusivas de la literatura, sino que también se emplean en nuestro lenguaje coloquial, incluso algunas están ya asimiladas a este, en ciertas expresiones o giros.
              A continuación, referiremos algunas de las figuras literarias más utilizadas y sus ejemplos.
              <li> 1. Metáfora </li>
              La metáfora es la relación sutil de analogía o semejanza que se establece entre dos ideas o imágenes.
              <lu>Ejemplos:</lu>
              “Tus ojos son verde selva”. Para indicar que el color de los ojos se asemejan al color de la selva.
              “Era su cabellera obscura/ hecha de noche y de dolor”, en el poema “Canción de otoño y primavera”, de Rubén Darío. Se relaciona el color del cabello con la oscuridad de la noche.
              <li>2. Símil o comparación</li>
              El símil o comparación consiste en establecer una relación de semejanza entre dos elementos que viene introducida por un elemento relacional explícito.
              <lu>Ejemplos:</lu>
              “Eres fría como el hielo”.
              “Se arrojó sobre ella cual águila sobre su presa”.
              <li>3. Hipérbole </li>
              La hipérbole tiene lugar cuando se aumenta o disminuye de manera exagerada un aspecto o característica de una cosa.
              <lu>Ejemplos: </lu>
              “Le pedí disculpas mil veces”. Es una manera de explicar que se pidió disculpa de manera reiterada.
              “Te amo hasta el infinito y más allá”. Expresa un amor si fin.
              “Lloró ríos de lágrimas al partir”. Se refiere a que la persona lloró mucho.
              <br></br><br></br>
            </p>
          </PDFExport>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              // /**AQUI VA EL LINK DE YOUTUBE */
              url="https://youtu.be/Cg1NSIcp3Yk"
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls="true"
            />
          </div>
          <Link to="/Ejer_fig">
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

export default fig_lit