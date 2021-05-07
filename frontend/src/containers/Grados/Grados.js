import React from 'react';
import styled from 'styled-components';
import './Grados.scss';
import { Row } from 'react-grid-system';
import { Link } from 'react-router-dom';
import Cuarto from '../images/4togrado.png';
import Quinto from '../images/5togrado.png';
import Sexto from '../images/6togrado.png';

const Container = styled.div`
background-color: ${({ theme }) => theme.content} !important;
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

function Grados() {
  return (
    <Container fluid className="grades-container">
      <br />
      <h2 className="text-grados">Grados</h2>
      <span>
        <Row>
          <div id="content">
            <div className="roundedcorners">
              <Link to="/materiascuarto">
                <img src={Cuarto} alt="Imagen" />
              </Link>
            </div>
          </div>
          <div id="content">
            <div className="roundedcorners">
              <Link to="/materiasquinto">
                <img src={Quinto} alt="Imagen" />
              </Link>
            </div>
          </div>
          <div id="content">
            <div className="roundedcorners">
              <Link to="/materiassexto">
                <img src={Sexto} alt="Imagen" />
              </Link>
            </div>
          </div>
        </Row>
      </span>
    </Container>
  );
}

export default Grados;