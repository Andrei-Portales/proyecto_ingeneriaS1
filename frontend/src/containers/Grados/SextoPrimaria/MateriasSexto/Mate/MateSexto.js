/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-grid-system';
import Mate from '../../../../images/matematicas.png';
import './MateSexto.css';

const Container = styled.div`
background-color: ${({ theme }) => theme.content} !important;
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

class MateSexto extends React.Component {
  render() {
    return (
      <Container fluid className="sexto-container">
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
                <Link to="/potencias">
                  <p className="tema2"> POTENCIAS</p>
                </Link>
              </div>
              <div className="temas">
                <Link to="/exponente_negativo">
                  <p className="tema2"> EXPONENTE NEGATIVO</p>
                </Link>
              </div>
              <div className="temas">
                <Link to="/notacion_cientifica">
                  <p className="tema2"> NOTACIÓN CIENTÍFICA</p>
                </Link>
              </div>
              <div className="temas">
                <Link to="/raiz_cuadrada">
                  <p className="tema2"> RAÍZ CUADRADA</p>
                </Link>
              </div>
              <div className="temas">
                <Link to="/angulos">
                  <p className="tema2"> ÁNGULOS</p>
                </Link>
              </div>
              <div className="temas">
                <Link to="/area_figuras_planas">
                  <p className="tema2"> ÁREA DE FIGURAS PLANAS</p>
                </Link>
              </div>
            </Col>
          </Row>
        </span>
      </Container>
    );
  }
}

export default MateSexto;
