/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import Ciencias from '../../../../images/ciencias.jpg';
import './CienciasSexto.css';

const Container = styled.div`
background-color: ${({ theme }) => theme.content} !important;
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

class CienciasSexto extends React.Component {
  render() {
    return (
      <Container fluid className="sexto-container">
        <Row>
          <Col className="left-section" sm={12} md={12} lg={6}>
            <img src={Ciencias} alt="Imagen" />
            <p className="info">
              En esta sección encontraras diversos temas de ciencia, en los cuales encontraras una sección teórica y una sección practica, asi como ejercicios para resultados y guias mediante videos.
            </p>
          </Col>
          <Col className="right-section" sm={12} md={12} lg={6}>
            <div className="temas">
              <Link to="/reinos">
              <p className="tema2">Clasificacion de los seres vivos</p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/animalia">
              <p className="tema2">Reino Animal</p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/energia">
              <p className="tema2">La Energia</p>
              </Link>
            </div>
            <div className="temas">
              <p className="tema2">Tema 4</p>
            </div>
            <div className="temas">
              <p className="tema2">Tema 5</p>
            </div>
            <div className="temas">
              <p className="tema2">Tema 6</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CienciasSexto;
