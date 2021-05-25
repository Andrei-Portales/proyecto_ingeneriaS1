import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-grid-system';
import '../../../../estilo-temas.scss';
import Ejer2 from '../../../../../images/Ejer2_Notacion_Cientifica.png';
import Ejer1 from '../../../../../images/Ejer1_Notacion_Cientifica.png';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

const Container = styled.div`
background-color: ${({ theme }) => theme.content} !important;
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

function Ejer_Notacion_Cientifica() {
  const container = React.useRef(null);
  const pdfExportComponent = React.useRef(null);
  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };


  return (
    <Container fluid className="grades-container">
      <PDFExport
        ref={pdfExportComponent}
        paperSize="auto"
        margin={40}
        fileName={`Notación Cientifica Sexto Primaria`}
        creator="Educa Facil"

      >
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
      </PDFExport>
      <button className="btnDescargarEjercicios" onClick={exportPDFWithComponent}>
        DESCARGAR
      </button>

    </Container>
  );
}

export default Ejer_Notacion_Cientifica;