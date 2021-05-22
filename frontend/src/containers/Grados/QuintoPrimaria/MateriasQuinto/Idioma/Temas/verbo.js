import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import '../../../../../Buttons/newbtns.scss';
import '../../../../estilo-temas.scss'; // Es el mismo estilo para todos los temas y ahorrar codigo

const Container = styled.div`
background-color: ${({ theme }) => theme.content} !important;
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

function verbo() {
  return (
    <Container fluid className="tema-container">
      <Row>
        <Col className="left-section" sm={12} md={7} lg={6}>
            <h1 className="tituloT">El Verbo</h1>
            <p>
                <br></br><br></br>
                Se conoce como verbo una clase de palabra cuyo significado indica la acción, el estado o proceso que realiza o sufre cualquier realidad mencionada en la oración. En la oración, el verbo funciona como el núcleo del predicado.
                <br></br><br></br>
                Al igual que otras palabras, el verbo presenta lexema, en el que reside el significado verbal, y morfemas de persona y número. Tiene, además, morfemas de tiempo, modo y aspecto.
                Se conoce como verbo una clase de palabra cuyo significado indica la acción, el estado o proceso que realiza o sufre cualquier realidad mencionada en la oración. En la oración, el verbo funciona como el núcleo del predicado.
                <br></br><br></br>
                Al igual que otras palabras, el verbo presenta lexema, en el que reside el significado verbal, y morfemas de persona y número. Tiene, además, morfemas de tiempo, modo y aspecto.
            </p>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              // /**AQUI VA EL LINK DE YOUTUBE */
              url="https://youtu.be/F31XS-rjABA"
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls="true"
            />
          </div>
          <button className= "btnEjercicios">
            EJERCICIOS
          </button>
          <button className= "btnDescargar">
            DESCARGAR
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default verbo;
