/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import '../../../../estilo-temas.scss'; // Es el mismo estilo para todos los temas y ahorrar codigo
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

function sistema_respiratorio() {
  const container = React.useRef(null);
  const pdfExportComponent = React.useRef(null);
  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };
  return (
    <Container fluid className="tema-container">
      <Row>
        <Col className="right-section" sm={12} md={7} lg={6}>
          <PDFExport
            ref={pdfExportComponent}
            paperSize="auto"
            margin={40}
            fileName={`Sistema Respiratorio Cuarto Primaria`}
            creator="Educa Facil"

          >

            <h1 className="tituloT">SISTEMA RESPIRATORIO</h1>
            <p>
              <br />
              Tiene por función llevar el oxígeno a nuestras células y recoger el gas carbónico que se
              produce en ella a fin de expulsarlo hacia el exterior.
              El intercambio de gases entre la sangre y los pulmones recibe el nombre de respiración
              externa, mientras que el intercambio de gases entre los fluidos y las células se denomina
              respiración interna o tisular.
              <br />
              <br />
              El sistema respiratorio del hombre comprende:
              <br />
              • Una porción conductora – formado por las fosas nasales, laringe, traquea y bronquios.
              <br />
              • Pulmones – órganos esenciales en la respiración.
              <br />
              <br />
              A. Porción conductora. Está conformado por:
              <br />
              Fosas nasales.
              <br />
              <br />
              Son dos cavidades alargadas separadas por el tabique nasal que se
              relaciona con el exterior mediante las ventanas de la nariz llamadas narinas, que son
              dos orificios dirigidos hacia abajo, también se comunica con la faringe a través de las
              coanas.
              Interiormente la nariz está recubierta por una membrana mucosa llamada Pituitaria,
              rica en vasos sanguíneos, nervios y glándulas que segregan moco.
              En la nariz también encontramos unas vellosidades que sirven para retener el polvo y
              otras impurezas del aire. En las fosas nasales se sitúa el sentido del olfato, que nos
              permite percibir los olores de todo cuanto nos rodea.
              La nariz cumple con la función de filtrar, humedecer y calentar el aire que pasa a los
              pulmones, también funciona como órgano de esterilización, retiene las partículas de
              polvo y microbios mediante el moco pegajoso producido por las glándulas nasales.
              <br />
              <br />
              La faringe.
              <br />
              <br />
              Es un conducto cartilaginoso formado por anillos se encuentra situada por la
              parte anterior del cuello. Comprende tres porciones, la rinofaringe relacionada con la
              cavidad nasal, con función respiratoria; la orofaringe con función común respiratoria y
              digestiva y la laringofaringe con función digestiva.
              <br />
              <br />
              Laringe.
              <br />
              <br />
              Llamada caja de la voz, contiene las cuerdas vocales que son repliegues de
              epitelio que vibran al pasar el aire entre ellas, con producción consecuente de sonidos.
              <br />
              <br />
              Tráquea.
              <br />
              <br />
              Es un conducto cartilaginoso de 12 cm de largo, formado por anillos
              cartilaginosos superpuestos que tienen la forma de la letra “C” que es la continuación de
              la laringe.
              <br />
              <br />
              Los Bronquios.
              <br />
              <br />
              Están formados por dos conductos fibrocartilaginosos en que se divide
              la traquea. Los bronquios se subdividen en bronquios secundarios antes de dividirse en
              bronquíolos de esa manera forman el árbol bronquial.
              <br />
              <br />
              B. Los Pulmones.
              <br />
              <br />
              Son órganos pares blandos, esponjosos elásticos de color gris en el
              hombre adulto, situado en la caja torácica, cada pulmón tiene un peso promedio de 500
              gramos. El pulmón derecho es algo más voluminoso que el izquierdo, el pulmón derecho
              está dividido en tres lóbulos y el izquierdo en dos lóbulos.
              Los pulmones están cubiertos por una membrana protectora llamadas pleuras.
              <br />
              <br />
              FISIOLOGÍA RESPIRATORIA
              <br />
              <br />
              Mediante ella realizamos los siguientes actos.
              <br />
              - Inspiramos el aire que entra por la nariz o la boca.
              <br />
              - El aire pasa por la tráquea y los bronquios hasta llegar a los pulmones.
              <br />
              - Los pulmones toman el oxígeno del aire y lo pasan a la sangre.
              <br />
              - La sangre deja en los pulmones dióxido de carbono.
              <br />
              - El aire de los pulmones es espirado, es decir, sale del exterior.
              <br />
              <br />
              HIGIENE DE LA RESPIRACIÓN:
              <br />
              <br />
              Para la mejor conservación de nuestro sistema respiratorio debemos seguir las siguientes
              recomendaciones:
              <br />
              1. Respirar siempre por la nariz, así el aire se humedece, se libera de impurezas y se
              calienta.
              <br />
              2. Es conveniente dormir siempre con una ventana abierta.
              <br />
              3. Las habitaciones donde dormimos o trabajamos deben estar bien ventiladas para
              asegurar la remoción del aire.
              <br />
              4. Practicar caminatas al aire libre, son recomendables las excursiones al campo.
              <br />
              5. Practicar deporte favorece el desarrollo de la capacidad pulmonar.
              <br />
              6. El polvo es dañino para las vías respiratorias, por eso es conveniente humedecer los
              pisos al barrer.
              <br />
              7. El sol purifica el aire eliminando los microbios por eso es necesario que los rayos
              solares ingresen a nuestras habitaciones.
              <br />
              <br />
              Los efectos de la contaminación atmosférica sobre el sistema respiratorio se manifiestan
              con lesiones de los bronquios y pulmones,
              Las enfermedades más frecuentes del sistema respiratorio son: bronquitis, asma,
              neumonía pulmonar.
              <br />
              <br />
            </p>
          </PDFExport>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              /** AQUI VA EL LINK DE YOUTUBE */
              url="https://www.youtube.com/watch?v=mmPGOZyw5f8"
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls="true"
            />
          </div>
          <button className="btnEjercicios" >
            EJERCICIOS
          </button>
          <button className="btnDescargar" onClick={exportPDFWithComponent}>
            DESCARGAR
          </button>
        </Col>
      </Row>
    </Container >
  );
}

export default sistema_respiratorio;
