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

function ser_humano() {
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
            fileName={`El ser humano Cuarto Primaria`}
            creator="Educa Facil"

          >

            <h1 className="tituloT">EL SER HUMANO</h1>
            <p>
              <br />
              Etapas del Desarrollo Humano
              <br />
              La formación de un nuevo ser empieza con la fecundación y para que llegue al estado
              adulto ha pasado por diferentes etapas de crecimiento y desarrollo.
              Cada etapa tiene sus características especiales que nos permiten cumplir funciones
              importantes dentro de la familia y la comunidad.
              <br />
              <br />
              A. PERÍODO DE CRECIMIENTO.
              <br />
              <br />
              Etapa Prenatal.
              <br />
              <br />
              Empieza con la fecundación que es la unión de un óvulo y un espermatozoide.
              El espermatozoide es la célula sexual masculina que al unirse con el óvulo, célula
              sexual femenina, forman el huevo, que para desarrollarse, se instala en el útero y
              comienza el embarazo de la madre.
              A partir de la fecundación la célula huevo se divide sucesivamente en dos, cuatro, ocho
              y muchas células formando un embrión, que darán lugar a los diferentes tejidos y
              órganos, todos estos cambios ocurre en los dos primeros meses de embarazo. Al
              término de este tiempo ya se reconoce la forma humana perfecta.
              A partir del tercer mes se llama feto y termina con el nacimiento, en este período fetal
              hay crecimiento corporal rápido y diferenciación de los diferentes sistemas, aparece el
              lanugo y cabello, la piel revestida con unto sebáceo, el feto es incapaz de vivir extra
              uterinamente debido a la inmadurez del sistema respiratorio.
              El feto está sujeto a la matriz de la madre por el cordón umbilical, su desarrollo tiene
              lugar en el interior de una bolsa llamada placenta, esta bolsa está llena de líquido
              amniótico. El cual lo protege contra los golpes e infecciones.
              Transcurridos los nueve meses de gestación en el vientre de la madre, el nuevo ser está
              listo para salir al mundo exterior, mediante el parto que se inicia con las contracciones
              uterinas, hasta la dilatación completa del cuello del útero que permite la salida del feto a
              través de la vagina.
              El niño recién nacido queda unido a la madre por el cordón umbilical, por lo que hay que
              atar este y cortarla. El trocito de cordón que le quedo al niño se seca y se cae a los
              pocos días del nacimiento, el punto donde se corta el cordón umbilical queda como
              cicatriz llamado ombligo.
              <br />
              <br />
              La Infancia.
              <br />
              <br />
              Comprende entre el nacimiento y los 6 años de edad. Al nacer el niño pesa unos kilos y
              mide sólo 50 cm.
              El niño recién nacido es un ser completamente indefenso, es incapaz de andar y
              alimentarse por sí solo.
              Se alimenta mamando del pecho de su madre, es el período de lactancia.
              A los siete meses le salen los dientes de leche que después de los 5 años de vida se
              caen y son sustituidos por la dentición definitiva.
              A partir del año el infante come casi toda clase de alimentos. Empieza a caminar y lo
              hará con poca seguridad durante algún tiempo, puede caer fácilmente al más leve
              movimiento.
              Al año comienza a emitir algunas palabras: mamá – papá y cerca a los dos años ya
              podrá hacerse entender hablando.
              En esta etapa los niños ejercitan sus sentidos, sus movimientos y su lenguaje para lo
              cual juega con los objetos que se encuentran a su alcance.
              En la infancia predomina la fantasía y al niño le gusta mucho que le cuenten los cuentos
              y fábulas.
              <br />
              <br />
              La Niñez o Segunda Infancia.
              <br />
              <br />
              Comprende de los 6 a los 12 años de edad y es una etapa complementaria de la
              infancia.
              Es una etapa en la que precisa mucho cuidado en la crianza del niño.
              Se le debe tratar siempre con cariño evitando maltratarlo o humillarlo, jamás debemos
              despreciarlo, para no crear en él acciones y sentimientos negativos.
              En esta etapa el niño asume tareas pequeñas y responsabilidades a medida que
              desarrolla su pensamiento lógico y va comprendiendo la realidad.
              <br />
              <br />
              La Pubertad.
              <br />
              <br />
              Se inicia generalmente entre los 12 – 15 años (se inicia primero en la niña que en el niño
              y suele durar de dos a tres años).
              El clima, la alimentación, los antecedentes hereditarios y otros factores del medio
              ambiente pueden anticipar o retardar al comienzo de la pubertad.
              Se manifiesta por la aparición de los caracteres sexuales secundarios como cambio de
              voz en los niños y desarrollo de los pechos en las niñas.
              Se puede observar una aceleración en el crecimiento de todos los órganos y un
              aumento de altura, en esta etapa se determina cambios fundamentales en el mundo de
              los pensamientos, sentimientos y voluntad.
              La pubertad es un segundo nacimiento, un despertar a una nueva vida, cuyos primeros
              pasos deben estar orientados con tino, bondad y firmeza por los padres educadores.
              <br />
              En esta etapa a las niñas
              les empieza a crecer el
              busto, su cintura se hace
              más angosta, sus caderas
              se ensanchan, les crecen
              vellos en las axilas y en el
              pubis y aparece, la
              menstruación.
              Las niñas entran en la
              pubertad antes que los
              niños; pero su crecimiento
              dura menos.
              <br />
              En los niños les crece y
              se engrosa el pene,
              aparecen vellos en las
              axilas, el pubis y en
              algunos, en el cuerpo y la
              cara. En esta etapa
              cambia el tono de voz y
              aparecen sonidos agudos
              conocidos comúnmente
              como “gallos”. Después
              de la pubertad, los niños
              crecen más y son más
              altos que las niñas
              <br />
              <br />
              Adolescencia.
              <br />
              <br />
              Esta etapa se inicia
              alrededor de los 15 y termina
              a los 19 años,
              aproximadamente. En este
              momento, los adolescentes
              empiezan a tomar sus
              propias decisiones, mientras
              experimentan cambios
              físicos y sus cuerpos se van
              preparando para procrear.
              Con esta etapa
              finaliza el período de
              crecimiento y se
              definen los rasgos
              propios del adulto.
              <br />
              <br />
              B. PERÍODO DE MADUREZ.
              <br />
              <br />
              La Adultez.
              <br />
              <br />
              Esta etapa comprende desde los 25 años hasta los 60 años.
              Ser adulto es haber alcanzado el máximo esplendor en las capacidades físicas,
              inteligencia y aptitudes. La vida adulta ofrece diversas oportunidades para
              autorealizarse: trabajo, matrimonio, actividades religiosas o políticas.
              <br />
              <br />
              C. Período de Decaimiento.
              <br />
              <br />
              La Ancianidad o senectud.
              <br />
              <br />
              Se inicia entre los 50 y 60 años, el organismo va decayendo y debilitándose
              progresivamente. Se pierde agudeza visual, táctil y auditiva.
              Se produce modificaciones importantes en el sistema endocrino, las arterias pierden
              elasticidad, la temperatura corporal varía, el deterioro mental comienza y evoluciona en
              forma muy distinta en cada persona.
              La ancianidad es la edad de la evocación, acostumbra hablar en todo momento de su
              tiempo usando la frase en mis tiempos. Si el anciano no sabe adaptarse a la nueva
              realidad pronto morirá.
              <br />
              <br />
            </p>
          </PDFExport>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              /** AQUI VA EL LINK DE YOUTUBE */
              url="https://www.youtube.com/watch?v=A0ELH7v41SM"
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

export default ser_humano;
