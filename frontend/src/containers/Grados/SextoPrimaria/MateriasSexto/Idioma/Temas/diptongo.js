import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
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

function diptongo() {
  return (
    <Container fluid className="tema-container">
      <Row>
        <Col className="left-section" sm={12} md={7} lg={6}>
          <h1 className="tituloT"> Diptongo </h1>
          <p>
            <br></br><br></br>
            Un diptongo son dos vocales que forman una sola sílaba.
            <br></br><br></br>
            Si hay dos vocales junta y una de ellas, o las dos, es débil (i, u) puede ser un diptongo. Es decir, una sola sílaba:
            pien-sa (2), rei-no (2), pues-to (2), pau-sa (2).
            <br></br><br></br>
            En algunas formas verbales se da el fenómeno del triptongo: vocal débil más vocal fuerte más vocal débil, caso de iai en una palabra como riáis
          </p>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              // /**AQUI VA EL LINK DE YOUTUBE */
              url="https://youtu.be/BDogfXOZYA0"
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls="true"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default diptongo