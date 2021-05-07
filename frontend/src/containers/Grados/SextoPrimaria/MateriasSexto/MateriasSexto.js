import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './MateriasSexto.scss';
import { Row } from 'react-grid-system';
import Mate from '../../../images/matematicas.png';
import Ciencias from '../../../images/ciencias.jpg';
import Idioma from '../../../images/idioma.jpg';

const Container = styled.div`
background-color: ${({ theme }) => theme.content} !important;
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

function MateriasSexto() {
  return (
    <Container fluid className="materias-container">
      <h1 className="text-materias"> Materias 6to</h1>
      <span>
        <Row>
          <div id="content">
            <div className="roundedcorners">
              <Link to="/matesexto">
                <img src={Mate} alt="Imagen" />
                <h1>Matematicas</h1>
              </Link>
            </div>
          </div>
          <div id="content">
            <div className="roundedcorners">
              <Link to="/cienciassexto">
                <img src={Ciencias} alt="Imagen" />
                <h1>Ciencias </h1>
              </Link>
            </div>
          </div>
          <div id="content">
            <div className="roundedcorners">
              <Link to="/idiomasexto">
                <img src={Idioma} alt="Imagen" />
                <h1>Idioma</h1>
              </Link>
            </div>
          </div>
        </Row>
      </span>
    </Container>
  );
}

export default MateriasSexto;
