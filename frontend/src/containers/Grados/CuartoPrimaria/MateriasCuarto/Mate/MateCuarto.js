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
                  <p className="tema2"> Numeración hasta de 6 cifras</p>
                </Link>
              </div>
              <div className="temas">
                <p className="tema2"> Tema 2</p>
              </div>
              <div className="temas">
                <p className="tema2"> Tema 3</p>
              </div>
              <div className="temas">
                <p className="tema2"> Tema 4</p>
              </div>
              <div className="temas">
                <p className="tema2"> Tema 5</p>
              </div>
              <div className="temas">
                <p className="tema2"> Tema 6</p>
              </div>
            </Col>
          </Row>
        </span>
      </Container>
    );
  }
}

export default MateCuarto;
