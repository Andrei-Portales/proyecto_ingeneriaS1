/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-grid-system';
import Mate from '../../../../images/matematicas.png';
import './MateCuarto.css';

const Container = styled.div`
background-color: ${({ theme }) => theme.content} !important;
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

class MateCuarto extends React.Component {
  render() {
    return (
      <Container fluid className="cuarto-container">
        <span>
          <Row>
            <Col className="left-section" sm={12} md={12} lg={6}>
              <img src={Mate} alt="Imagen" />
              <p className="info">
                En esta sección encontraras diversos temas matematicos, en los cuales encontraras una sección teórica y una sección practica, asi como ejercicios para resultados y guias mediante videos.
              </p>
            </Col>
            <Col className="right-section" sm={12} md={12} lg={6}>
              <div className="temas">
                <Link to="/numeracion_6_digitos">
                  <p className="tema2"> NUMERACIÓN DE 6 CIFRAS</p>
                </Link>
              </div>
              <div className="temas">
                <Link to="/suma_resta">
                  <p className="tema2"> ADICIÓN Y SUSTRACCIÓN DE NÚMEROS</p>
                </Link>
              </div>
              <div className="temas">
                <Link to="/operaciones_combinadas">
                  <p className="tema2"> OPERACIONES COMBINADAS</p>
                </Link>
              </div>
              <div className="temas">
                <Link to="/conjuntos">
                  <p className="tema2"> CONJUNTOS</p>
                </Link>
              </div>
              <div className="temas">
                <Link to="/operaciones_conjuntos">
                  <p className="tema2"> OPERACIONES CON CONJUNTOS</p>
                </Link>
              </div>
              <div className="temas">
                <Link to="/multiplos_divisores">
                  <p className="tema2"> MULTIPLOS Y DIVISORES</p>
                </Link>
              </div>
            </Col>
          </Row>
        </span>
      </Container>
    );
  }
}

export default MateCuarto;
