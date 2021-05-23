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

function clasificacion_alimentos() {
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
            fileName={`Poesia Sexto Primaria`}
            creator="Educa Facil"

          >

            <h1 className="tituloT">CLASIFICACIÓN DE LOS ALIMENTOS</h1>
            <p>
                <br />
                Los alimentos se clasifican
                <br />
                Teniendo en cuenta su origen, y por su composición química.
                <br />
                • Atendiendo a su origen son: de origen animal, de origen vegetal y de origen mineral.
                <br />
                • De acuerdo a su composición química son alimentos orgánicos y alimentos inorgánicos.
                <br />
                <br />
                A. Atendiendo a su origen: Se dividen en:
                <br />
                <br />
                • Alimentos de origen vegetal. Los alimentos de origen vegetal son los que proceden
                de las plantas (raíces, hojas, semillas, tallos, frutos).
                <br />
                Se clasifican:
                <br />
                Tubérculos: papa, camote, olluco, yuca, hortalizas o verduras: coliflor, lechuga,
                espinaca, col, acelga, brócoli, etc.
                <br />
                Legumbres: fríjol, arveja, garbanzo, lenteja.
                <br />
                Frutas: plátano, manzana, uva, pera, papaya, piña, durazno, naranja, etc.
                <br />
                Deben consumirse diariamente porque contienen minerales, vitaminas, proteínas y
                fibras.
                <br />
                <br />
                • Alimentos de origen animal. Son las carnes y sus derivados las primeras se hallan
                de res, pollo, pescado, cerdo, cuy, mariscos, pato, oveja. Entre los segundos se
                encuentra la leche, huevo, queso, miel, embutidos; su consumo es vital porque
                proporciona al organismo gran cantidad de proteínas y vitaminas.
                <br />
                <br />
                • De origen mineral. Son los alimentos inorgánicos que se caracterizan porque no
                necesitan ser descompuestos para ser asimilados, los más importante son el agua,
                vital para el organismo y las sales minerales (sal común, carbonato y fosfato de sodio)
                son imprescindibles.
                <br />
                <br />
                B. De acuerdo a su Composición química: Son:
                <br />
                ❖ Alimentos Orgánicos. Tenemos a los hidratos de carbono, lípidos y proteínas.
                <br />
                <br />
                • Hidratos de carbono. Son alimentos compuestos por carbono, hidrógeno,
                oxígeno. Provienen principalmente de los vegetales y son las principales fuentes
                de energía.
                Comprenden varias clases de azúcares: glucosa (uva), levulosa (varios frutos),
                sacarosa (caña de azúcar), lactosa (azúcar de la leche) y los amiláceos o féculas
                (harina presente de trigo, maíz, papa).
                <br />
                • Lípidos: Son alimentos caloríficos que tienden a acumularse en el cuerpo y son
                peligrosos si se ingieren en gran cantidad.
                Pueden ser de origen animal: las grasas provenientes de animales (cerdo, vaca,
                aves), la manteca y mantequilla; y de origen vegetal aceite de oliva, de maní, de
                coco, de palma, etc.
                <br />
                • Proteínas: Son sustancias compuestas por carbono, hidrógeno, oxígeno y
                nitrógeno. Pueden contener además azufre y fósforo, hierro, su función es el de
                formación y reparación de tejidos, ayuda al crecimiento y recuperación del
                organismo en caso de enfermedad o lesión. Pueden ser de origen animal (huevo,
                carne, leche), origen vegetal (legumbres, gluten).
                <br />
                <br />
                ❖ Vitaminas: Son sustancias orgánicas existentes en los alimentos en cantidades muy
                pequeñas son necesarias para el equilibrio de las funciones vitales. Son importantes
                porque intervienen en los procesos nutritivos de los tejidos y en la resistencia a las
                enfermedades.
                Las vitaminas se designan con las letras del alfabeto. A su carencia se le llama
                avitaminosis y su exceso hipervitaminosis que causan serios trastornos.
                <br />
                <br />
                Vitamina A. Favorece el funcionamiento del
                ojo, de la piel, de las mucosas y la formación
                de los dientes.
                Su carencia produce dificultades en la visión
                nocturna que puede llevar a la ceguera
                nocturna o xeroftalmia, provoca dolencias a
                la piel.
                Su exceso en forma sintética ocasiona
                náuseas, cefaleas, vómitos, hipertensión,
                pérdida de proteínas en el suero sanguíneo.
                <br />
                <br />
                Vitamina B. Es la que más subdivisiones
                presenta, fue asilada por primera vez en
                1926 por Jansen y Donath. Su carencia da
                lugar al Beriberi o la pelagra enfermedad que
                ataca a la piel, al sistema nervioso, al
                sistema digestivo. Una pequeña carencia de
                ella provoca fatiga, debilidad muscular,
                irritabilidad y depresión.
                <br />
                <br />
                Vitamina B1. Es conocida como tiamina o
                antirreumática, ayuda a prevenir la aparición de ciertas alteraciones nerviosas y el
                organismo la utiliza rápidamente.
                Su carencia causa retardo en el crecimiento, pérdida de apetito, degeneración del
                tejido nervioso, deficiencia muscular, agrandamiento del corazón, beriberi e incluso la
                muerte.
                <br />
                <br />
                Vitamina B2. Se le denomina Rivoflavina. Ayuda a liberar energía de las células,
                regula algunas funciones vitales e interviene en la visión. Forma parte del pigmento
                de la retina, su carencia origina ulceraciones de la piel, hipersensibilidad ocular a la
                luz y ruptura de los vasitos de la superficie del ojo.
                <br />
                <br />
                Vitamina B6 B12 . La primera llamada ácido nicotínico, es vasodilatadora, su carencia
                produce enrojecimiento y resecación de la piel y pelagra.
                La segunda es antianémica y contiene cobalto se forma normalmente en cantidades
                suficientes en el intestino grueso y el jugo gástrico, asegura su absorción.
                <br />
                <br />
                Vitamina C. Es conocida como ácido
                ascórbico o ácido antiescorbuto. Se cree que
                acelera la formación de fibras colágenas.
                Su carencia produce encías sangrantes,
                gingivitis, debilitamiento de los dientes,
                dolores en las articulaciones y escorbuto. Se
                utiliza frecuentemente en la prevención de
                resfríos.
                <br />
                <br />
                Vitamina D. Conocida como antirraquítica, se
                encuentra en muchos alimentos y se forma en
                la piel por la acción de los rayos solares
                (ultravioleta) a partir del ergosterol o
                provitamina D existente en la dermis.
                Su importancia reside en su acción
                reguladora el metabolismo del calcio y del
                fósforo.
                Su ausencia origina el raquitismo ya que es
                necesaria en la calcificación de los huesos.
                <br />
                <br />
                Vitamina E. Conocida como d – alfa –
                tocofenol y vitamina de la fertilidad. Fue
                aislada por primera vez en 1936 por los Drs.
                Evans, Bichop. Es necesaria para la
                reproducción normal, su efecto antioxidante
                se hace útil para el almacenamiento de la
                vitamina A. La carencia de esta vitamina
                produce esterilidad y disminuye la lactancia.
                <br />
                <br />
                Vitamina K. Conocido como
                antihemorrágica, se produce en la síntesis
                bacteriana intestinal y por la ingestión de
                alimentos.
                Tiene efecto sobre la protrombina elemento
                fundamental para la coagulación de la
                sangre.
                Se halla en alimentos de origen vegetal y
                animal y es estable en presencia de oxígeno
                y calor.
                <br />
                <br />
                • Alimentos Inorgánicos. Son aquellas de origen mineral, como el agua, sales
                minerales, son elementos esenciales para la formación de diversos tejidos. Se
                caracterizan porque no necesitan ser descompuestos para asimilarlos.
                <br />
                <br />
            </p>
          </PDFExport>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              /** AQUI VA EL LINK DE YOUTUBE */
              url="https://www.youtube.com/watch?v=H2fs0lxetO4"
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

export default clasificacion_alimentos;
