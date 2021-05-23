/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-grid-system';
import Ciencias from '../../../../images/ciencias.jpg';
import './CienciasCuarto.css';

const Container = styled.div`
background-color: ${({ theme }) => theme.content} !important;
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

// Aplica color al tag p dependiendo el tema dark/lite
const P = styled.p`
  color: ${({ theme }) => theme.text} !important;

`;

class CienciasCuarto extends React.Component {
  render() {
    return (
      <Container fluid className="cuarto-container">
        <Row>
          <Col className="left-section" sm={12} md={12} lg={6}>
            <img src={Ciencias} alt="Imagen de ciencias" />
            <p className="info">
              En esta sección encontraras diversos temas de ciencia, en los cuales encontraras una sección teórica y una sección practica, asi como ejercicios para resultados y guias mediante videos.
            </p>
          </Col>
          <Col className="right-section" sm={12} md={12} lg={6}>
            <div className="temas">
              <Link to="/sistema_digestivo">
                <P className="tema2"> SISTEMA DIGESTIVO</P>
              </Link>
            </div>
            <div className="temas">
              <Link to="/ser_humano">
                <P className="tema2"> EL SER HUMANO</P>
              </Link>
            </div>
            <div className="temas">
              <Link to="/clasificacion_alimentos">
                <P className="tema2"> CLASIFICACIÓN DE LOS ALIMENTOS</P>
              </Link>
            </div>
            <div className="temas">
              <Link to="/sistema_respiratorio">
                <P className="tema2"> SISTEMA RESPIRATORIO</P>
              </Link>
            </div>
            <div className="temas">
              <P className="tema2">Tema 5</P>
            </div>
            <div className="temas">
              <P className="tema2">Tema 6</P>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CienciasCuarto;
