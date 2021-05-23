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

function sistema_digestivo() {
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
            fileName={`Sistema Digestivo Cuarto Primaria `}
            creator="Educa Facil"

          >

            <h1 className="tituloT">SISTEMA DIGESTIVO</h1>
            <p>
              <br />
              Tiene como función transformar los alimentos tomados del exterior en sustancias simples
              capaces de pasar a la sangre.
              <br />
              El sistema digestivo en el hombre está formado por un grupo de órganos. La digestión
              comienza en la boca y termina en el intestino delgado; los elementos no digeridos son
              eliminados a través del ano.
              <br />
              <br />
              Los órganos que forman el sistema digestivo humano son:
              <br />
              <br />
              a) La boca y los órganos anexos (dientes, lengua, glándulas salivales)
              <br />
              b) La faringe
              <br />
              c) El esófago
              <br />
              d) El estómago
              <br />
              e) El intestino delgado dividido en duodeno, yeyuno e ileón.
              <br />
              f) El intestino grueso dividido en ciego, colon y recto.
              <br />
              g) Las glándulas anexas: hígado, páncreas
              <br />
              <br />
              A. LA BOCA
              <br />
              <br />
              Esta situada en la parte anterior e inferior de la cara, es el lugar donde ingresan los
              alimentos. En la boca se encuentran los dientes, la lengua y glándulas salivales.
              Los dientes aparecen en el niño entre los seis y los nueve meses de edad, son dientes
              de leche, y se van cayendo entre los 6 años de edad en la que empiezan a salir los
              dientes definitivos.
              Una persona adulta tiene 32 dientes, hay 8 incisivos, 4 caninos, 8 premolares, 12
              molares, la muela de juicio sale a partir de los 18 años.
              Los dientes mastican los alimentos. Los dientes incisivos cortan los alimentos, los
              caninos los desgarra, los premolares y molares los trituran.
              En la boca al mismo tiempo que los dientes trituran los alimentos. La lengua los va
              mezclando con la saliva, formando el bolo alimenticio, el que empujado por la lengua
              pasa por el esófago en dirección al estómago.
              El acto de tragar los alimentos se llama deglución.
              <br />
              <br />
              B. LA FARINGE
              <br />
              <br />
              Es un órgano de más de 13 cm de largo, a través de este órgano pasa el bolo
              alimenticio hacia el esófago y el aire hacia la laringe.
              <br />
              <br />
              C. EL ESÓFAGO:
              <br />
              <br />
              Es un conducto de 25 cm de largo, que comienza en la faringe y termina en el estómago
              mediante un orificio llamado cardias.
              <br />
              <br />
              D. EL ESTÓMAGO
              <br />
              <br />
              Es una bolsa musculosa, cuya forma recuerda a una “j” mayúscula, comprendiendo dos
              porciones, una cardiaca y la otra pilórica, sus glándulas segregan mucus, pepsina y
              ácido clorhídrico, en el momento de la digestión.
              Los movimientos peristálticos y la acción del jugo gástrico convierte el bolo alimenticio,
              después de dos o tres horas, en masa semilíquida llamada quimo, llamándose a este
              fenómeno quimificación de los alimentos.
              <br />
              <br />
              E. EL INTESTINO DELGADO:
              <br />
              <br />
              Es un tubo de más o menos de 7 m por 3 cm de ancho, se comunica con el estómago
              mediante el píloro y con el intestino grueso mediante la válvula ileocecal.
              En el intestino delgado se realiza el fenómeno denominado quilificación de los alimentos
              mediante el jugo del páncreas, del hígado y del propio intestino. Como resultado final el
              quimo se transforma en quilo que es absorbido mediante las vellosidades intestinales y
              llevado a todo el organismo a través de la sangre.
              <br />
              <br />
              F. EL INTESTINO GRUESO:
              <br />
              <br />
              Tiene una longitud de más o menos 1.5 m por 6 cm de ancho.
              En el intestino grueso se realiza la reabsorción del agua y se forma las materias fecales,
              constituida no sólo por residuos de los alimentos sino también por mucus que son
              eliminados por el hígado o glándulas digestivas.
              <br />
              <br />
              G.GLÁNDULAS ANEXAS
              <br />
              <br />
              El hígado y el páncreas son las glándulas anexas del sistema digestivo.
              Estas glándulas se llaman anexas porque están situadas cerca del sistema digestivo y
              con los jugos que segregan ayudan a la digestión.
              <br />
              <br />
              ENFERMEDADES Y TRASTORNOS DEL SISTEMA DIGESTIVO:
              <br />
              <br />
              La acidez estomacal.
              <br />
              Se produce por comer excesivamente o comer rápido, cuando la
              acidez persiste puede producir úlceras en las paredes del estómago o del intestino.
              La inflamación dolorosa del apéndice es una enfermedad que se llama apendicitis. Otras
              enfermedades del sistema digestivo son la colitis, la disentería, la diarrea, el cólera.
              <br />
              <br />
              HIGIENE DEL SISTEMA DIGESTIVO:
              <br />
              <br />
              a. Higiene de la boca.
              <br />
              Debemos lavarnos la boca después de cada comida, con cepillo y pasta dentrifica, para
              evitar las caries dentarias.
              Las caries son producidas por la descomposición de los restos de comidas que quedan
              entre los dientes.
              No tomar bebidas demasiado frías ni alimentos muy calientes.
              No romper cuerpos ni destapar botellas con los dientes.
              Visitar periódicamente al dentista.
              <br />
              <br />
              b. Higiene del estómago.
              <br />
              De la masticación depende la buena digestión. Si los elementos están bien masticados,
              los jugos digestivos ejercen mejor su acción química.
              Reposar después de las comidas, el estómago necesita cierto reposo y mayor
              circulación sanguínea al iniciar la digestión.
              No se debe tomar baños muy fríos durante el proceso de la digestión.
              No se debe comer en exceso.
              <br />
              <br />
              REGLAS PARA ADQUIRIR HÁBITOS DE NUTRICIÓN:
              <br />
              <br />
              - Comer alimentos sanos y siempre a la misma hora.
              <br />
              - Masticar bien y despacio los alimentos.
              <br />
              . No hablar ni tomar agua mientras tengamos alimentos en la boca.
              <br />
              - No comer golosinas ni dulces en exceso.
              <br />
              - Comer tranquilo y contento.
              <br />
              - No hablar de cosas feas ni desagradables mientras comemos.
              <br />
              - No leer al estar comiendo.
              <br />
              - No correr o jugar después de la comida.
              <br />
              - Lavarse la boca después de cada comida.
              <br />
              <br />
            </p>
          </PDFExport>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              /** AQUI VA EL LINK DE YOUTUBE */
              url="https://www.youtube.com/watch?v=1SfHITH0-tE"
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

export default sistema_digestivo;
