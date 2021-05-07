/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import Idioma from '../../../../images/idioma.jpg';
import './IdiomaQuinto.css';

const Container = styled.div`
background-color: ${({ theme }) => theme.content} !important;
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

class IdiomaQuinto extends React.Component {
  render() {
    return (
      <Container fluid className="quinto-container">
        <Row>
          <Col className="left-section" sm={12} md={12} lg={6}>
            <img src={Idioma} alt="Imagen" />
            <p className="info">
              En esta sección encontraras diversos temas de ciencia, en los cuales encontraras una sección teórica y una sección practica, asi como ejercicios para resultados y guias mediante videos.
            </p>
          </Col>
          <Col className="right-section" sm={12} md={12} lg={6}>
            <div className="temas">
              <Link to="/sustantivos">
                <p className="tema2">Los Sustantivos</p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/pro_personal">
                <p className="tema2">Prononbre Personal</p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/verbo">
                <p className="tema2">El verbo </p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/oracion">
                <p className="tema2">La Oracion </p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/fig_lit">
                <p className="tema2">Figuras Literarias</p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/articulo">
                <p className="tema2"> El Articulo </p>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default IdiomaQuinto;
