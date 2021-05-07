/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import Idioma from '../../../../images/idioma.jpg';
import './IdiomaSexto.css';

const Container = styled.div`
background-color: ${({ theme }) => theme.content} !important;
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

class IdiomaSexto extends React.Component {
  render() {
    return (
      <Container fluid className="sexto-container">
        <Row>
          <Col className="left-section" sm={12} md={12} lg={6}>
            <img src={Idioma} alt="Imagen"/>
            <p className="info">
              En esta sección encontraras diversos temas de ciencia, en los cuales encontraras una sección teórica y una sección practica, asi como ejercicios para resultados y guias mediante videos.
            </p>
          </Col>
          <Col className="right-section" sm={12} md={12} lg={6}>
            <div className="temas">
              <Link to="/poesia">
                <p className="tema2">La Poesía </p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/lirico">
                <p className="tema2">Género Lírico</p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/semantica">
                <p className="tema2">La Semántica</p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/diptongo">
                <p className="tema2"> Diptongo </p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/triptongo">
                <p className="tema2"> Triptongo</p>
              </Link>
            </div>
            <div className="temas">
              <Link to="/hiato">
                <p className="tema2"> Hiato </p>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default IdiomaSexto;
