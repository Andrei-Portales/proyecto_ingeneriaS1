/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import Mate from '../../../../images/matematicas.png';
import './MateQuinto.css';

const Container = styled.div`
background-color: ${({ theme }) => theme.content} !important;
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

class MateQuinto extends React.Component {
  render() {
    return (
      <Container fluid className="quinto-container">
        <Row>
          <Col className="left-section" sm={12} md={12} lg={6}>
            <img src={Mate} alt="Imagen" />
            <p className="info">
              En esta sección encontraras diversos temas matematicos, en los cuales encontraras una sección teórica y una sección practica, asi como ejercicios para resultados y guias mediante videos.
            </p>
          </Col>
          <Col className="right-section" sm={12} md={12} lg={6}>
            <div className="temas">
              <Link to="/division">
                <p className="tema2">Division</p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/multiplos">
                <p className="tema2">Multiplos</p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/fracciones">
                <p className="tema2">Fracciones</p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/num_mix">
                <p className="tema2">Numeros mixtos</p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/val_posi">
                <p className="tema2"> Valor Poscional </p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/propor">
                <p className="tema2">Proporciones</p>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MateQuinto;
