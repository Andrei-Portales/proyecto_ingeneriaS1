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

function pro_personal() {
  return (
    <Container fluid className="tema-container">
      <Row>
        <Col className="left-section" sm={12} md={7} lg={6}>
          <h1 className="tituloT">Pronombre Personal</h1>
          <p>
              <br></br><br></br>
              Los pronombres personales son palabras de carácter gramatical que representan a los participantes de un discurso, ya se trate de personas, animales o cosas.
              <br></br><br></br>
              La función de los pronombres personales es sustituir los nombres de las entidades por personas gramaticales. Por ejemplo: "Mildred trajo el almuerzo" / "Ella trajo el almuerzo".   
              En los pronombres personales, la primera persona se refiere al emisor del mensaje; la segunda persona se refiere al receptor y la tercera persona se refiere aquello de lo que se habla. Por ejemplo: “Yo te lo advertí: él no es de fiar”.
              <br></br><br></br>
          </p>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              // /**AQUI VA EL LINK DE YOUTUBE */
              url="https://youtu.be/lev57BxNL2w"
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

export default pro_personal;
