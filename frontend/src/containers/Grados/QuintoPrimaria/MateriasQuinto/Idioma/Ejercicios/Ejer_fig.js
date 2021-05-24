import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-grid-system';
import '../../../../estilo-temas.scss';
import Ejer2 from '../../../../../images/Ejer2_Investi.png';
import Ejer1 from '../../../../../images/Ejer1_Investi.png';

const Container = styled.div`
background-color: ${({ theme }) => theme.content} !important;
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

function Ejer_fig() {
  return (
    <Container fluid className="grades-container">
      <br />
      <h2 className="text-grados">EJERCICIOS</h2>
      <span>
        <Row>
          <div id="content">
                <img src={Ejer1} alt="Imagen" />
            </div>
          <div id="content">
                <img src={Ejer2} alt="Imagen" />
          </div>
        </Row>
      </span>
    </Container>
  );
}

export default Ejer_fig;