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

function inves_cienti() {
  return (
    <Container fluid className="tema-container">
      <Row>
        <Col className="right-section" sm={12} md={7} lg={6}>
          <h1 className="tituloT">Investigación Científica</h1>
        <p>
              <br></br>
              La investigación científica es un proceso ordenado y sistemático de indagación en el cual,
              mediante la aplicación rigurosa de un conjunto de métodos y criterios, se persigue el estudio,
              análisis o indagación en torno a un asunto o tema, con el objetivo subsecuente de aumentar,
              ampliar o desarrollar el conocimiento que se tiene de este. <br></br><br></br>

              El objetivo fundamental de la investigación científica es buscar soluciones a problemas específicos:
              explicar fenómenos, desarrollar teorías, ampliar conocimientos, establecer principios, 
              reformular planteamientos, refutar resultados, etc. <br></br><br></br>

              La investigación científica consta de tres elementos indispensables:

              <li>Objeto de investigación. Se refiere al asunto o tema sobre el que se va a investigar y que será objeto de análisis pormenorizado.</li>
              <li>Medio. Conjunto de recursos, métodos y técnicas adecuados para el tipo de investigación y el tema que se va a abordar.</li>
              <li>Finalidad de la investigación. Se refiere a las razones que motivan la investigación, es decir, a su propósito último. Por ejemplo, qué beneficios aportará a la sociedad determinado conocimiento.</li>
          </p>
        </Col>
        <Col className="left-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              // /**AQUI VA EL LINK DE YOUTUBE */
              url="https://youtu.be/zzHu-yqdlz0"
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

export default inves_cienti;
