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

function triptongo() {
  return (
    <Container fluid className="tema-container">
      <Row>
        <Col className="left-section" sm={12} md={7} lg={6}>
          <h1 className="tituloT"> Triptongo </h1>
          <p>
              <br></br><br></br>
              Un triptongo se produce por la unión de vocales en un trío que da lugar a una única sílaba. Esto quiere decir que, al separar una palabra en sílabas, cuando hay un triptongo, las tres vocales que están juntas quedan en la misma sílaba.
              <br></br><br></br>
              Las reglas gramáticas establecen que un triptongo se compone de una vocal débil, una vocal fuerte y otra débil. Cuando el acento se sitúa en la vocal débil, el triptongo se rompe y se produce un hiato.
              <br></br><br></br> 
          </p>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              // /**AQUI VA EL LINK DE YOUTUBE */
              url="https://youtu.be/MsvfQGUZ9fM"
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

export default triptongo;
