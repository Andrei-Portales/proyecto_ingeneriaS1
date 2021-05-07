/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import Ciencias from '../../../../images/ciencias.jpg';
import './CienciasQuinto.css';

const Container = styled.div`
background-color: ${({ theme }) => theme.content} !important;
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

class CienciasQuinto extends React.Component {
  render() {
    return (
      <Container fluid className="quinto-container">
        <Row>
          <Col className="left-section" sm={12} md={12} lg={6}>
            <img src={Ciencias} alt="Imagen" />
            <p className="info">
              En esta sección encontraras diversos temas de ciencia, en los cuales encontraras una sección teórica y una sección practica, asi como ejercicios para resultados y guias mediante videos.
            </p>
          </Col>
          <Col className="right-section" sm={12} md={12} lg={6}>
            <div className="temas">
              <Link to="/origen_de_vida">
                <p className="tema2">Origen de la vida </p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/origen_mayas">
                <p className="tema3">Origen de la vida desde la Cultura Maya</p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/celulas">
                <p className="tema4">Las Células </p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/anatomia">
                <p className="tema5">Anatómia</p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/materia">
                <p className="tema6">Cambios en la Materia</p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/inves_cienti">
                <p className="tema7">Investigación Científica</p>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CienciasQuinto;
