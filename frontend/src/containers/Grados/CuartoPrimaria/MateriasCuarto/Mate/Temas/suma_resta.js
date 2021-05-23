/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
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

function suma_resta() {
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
            fileName={`Adicion y sustraccion de numeros Cuarto Primaria`}
            creator="Educa Facil"

          >

            <h1 className="tituloT">ADICIÓN Y SUSTRACCIÓN DE NÚMEROS</h1>
            <p>
              SABÍAS QUE . . .
              <br />
              . . . hace millones de años no se conocían los números ni se sabía contar. Por cada oveja, el
              hombre primitivo hacía una ranura en un árbol o echaba una piedrecita en una bolsa, de esa
              manera sabía cuántas tenía. Posteriormente, el hombre evoluciona y aprende a contar,
              sumar y restar.
              <br />
              <br />

              La adición es la operación matemática de composición que consiste en combinar o añadir dos números o más para obtener una cantidad final o total.
              <br />
              <br />

              La adición tiene términos, estos son: 89,876 + 96,765 = 186,641
              <br />
              '89,876' y '96,765' son los sumandos
              <br />
              '+' es el signo
              <br />
              y '186,641' es la suma
              <br />
              <br />

              Ahora conoceremos las propiedades de la adición.
              <br />
              <br />
              a) Propiedad de Clausura: En la adición, la suma es un número.
              <br />
              Ejemplo: 352 + 531 = 883  N
              <br />
              <br />
              b) Propiedad Conmutativa: El orden de los sumandos no altera la suma
              <br />
              Ejemplo: 5 + 8 = 13     y     8 + 5 = 13     entonces     5 + 8 = 8 + 5
              <br />
              <br />
              c) Propiedad Asociativa: Los sumandos se pueden asociar de diferentes formas y la suma es la misma.
              <br />
              Ejemplo: (2 + 5) + 3 = 2 + (5 + 3)
              <br />
              7 + 3 = 2 + 8
              <br />
              10 = 10
              <br />
              <br />
              d) Propiedad del Elemento Neutro: Todo número natural sumado con cero "0" es igual al mismo número.
              <br />
              Ejemplo: 998 + 0 = 998
              <br />
              <br />

              La sustracción o la resta representa la operación de eliminación de objetos de una colección.
              <br />
              <br />

              La sustracción tiene términos, estos son: 9,980 - 5,672 = 4,308
              <br />
              '9,980' es el minuendo
              <br />
              '-' es el signo
              <br />
              '5,672' es el sustraendo
              <br />
              y '4,308' es la diferencia
              <br />
              <br />

              Ahora conoceremos las propiedades de la sustracción.
              <br />
              <br />
              a) Si al minuendo se le suma un número, la diferencia queda aumentada en dicho número.
              <br />
              Ejemplo: (8 + 2) - 3 = (5 + 2)
              <br />
              10 - 3 = 7
              <br />
              <br />
              b) Si al minuendo se le resta un número, la diferencia disminuye en dicho número.
              <br />
              Ejemplo: (8 - 2) - 5 = (3 - 2)
              <br />
              6 - 5 = 1
              <br />
              <br />
              c) Si al sustraendo se le aumenta un número, la diferencia disminuye en dicho número.
              <br />
              Ejemplo: 30 - (15 + 2) = (15 - 2)
              <br />
              30 - 17 = 13
              <br />
              <br />
              d) Si al sustraendo se le disminuye un número, la diferencia aumenta en dicho número.
              <br />
              Ejemplo: 20 - (6 - 3) = (14 + 3)
              <br />
              20 - 3 = 17
              <br />
              <br />
            </p>
          </PDFExport>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              /** AQUI VA EL LINK DE YOUTUBE */
              url="https://www.youtube.com/watch?v=PfgBCz9eSgY"
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

export default suma_resta;
