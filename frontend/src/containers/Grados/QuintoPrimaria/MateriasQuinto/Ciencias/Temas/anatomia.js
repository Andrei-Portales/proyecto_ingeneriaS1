import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
import '../../../../../Buttons/newbtns.scss';
import '../../../../estilo-temas.scss'; // Es el mismo estilo para todos los temas y ahorrar codigo

const Container = styled.div`
background-color: ${({ theme }) => theme.content} !important;
  box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

function anatomia() {
  return (
    <Container fluid className="tema-container">
      <Row>
        <Col className="left-section" sm={12} md={7} lg={6}>
          <h1 className="tituloT">Anatomia</h1>
          <p>
                <br></br><br></br>
                La anatomía humana es la ciencia de carácter práctico y morfológico que se dedica principalmente al estudio de las estructuras
                macroscópicas del cuerpo humano. Deja el estudio de los tejidos a la histología, y el de las células a la citología y a la biología celular.
                La anatomía humana es una ciencia especial dentro de la anatomía general (animal). Biológicamente, el ser humano es un animal. Y, como los animales,
                el cuerpo humano se organiza, mediante una visión sistemática y a semejanza del Universo del que forma parte, en diferentes niveles de jerarquización que, 
                enlistados en orden ascendente (de lo micro a lo macro, de lo más invisible e interno hacia lo más visible y externo), son los siguientes: se compone de moléculas,
                que juntas se vuelven células, y estas dependiendo de su tipo se vuelven a su vez tejidos, y estos a su vez se clasifican en órganos, para finalmente por conjuntos y función
                se denominen aparatos, y estos integrados formen sistemas. Otras visiones (funcional, morfogenética, clínica, etcétera), según otros criterios, estudian el cuerpo humano desde otras perspectivas,
                pero esta es la que suele utilizarse para comprender lo básico.<br></br><br></br>


                Un sistema es un grupo de órganos asociados que concurren en una función general y están formados predominantemente por los mismos tipos de tejidos. Por ejemplo: el sistema esquelético, el sistema cardiovascular, 
                el sistema nervioso y otros.    
                <li>Sistema inmunitario: defensa contra agentes causantes de enfermedades.</li>
                <li>Sistema tegumentario: piel, pelo y uñas.</li>
                <li>Sistema nervioso: recogida, transferencia y procesado de información. Formado por el sistema nervioso central (encéfalo y médula espinal) y el sistema nervioso periférico (nervios de todo el cuerpo).</li>
                <li>Sistema cardiovascular: formado por el corazón, arterias, venas y capilares.</li>
                <li>Sistema linfático: formado por los capilares, vasos y ganglios linfáticos, bazo, Timo y Médula Ósea.</li>
                <li>Sistema endocrino: comunicación dentro del cuerpo mediante hormonas. </li>
                <li>Sistema muscular: movimiento del cuerpo.</li>
                <li>Sistema óseo: apoyo estructural y protección mediante huesos.</li>
                <li>Sistema articular: formado por las articulaciones y ligamentos asociados que unen el sistema esquelético y permite los movimientos corporales.</li> <br></br><br></br>
            </p>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              // /**AQUI VA EL LINK DE YOUTUBE */
              url="https://youtu.be/8GmuAYLeKgw"
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls="true"
            />
          </div>
          <button className= "btnEjercicios">
            EJERCICIOS
          </button>
          <button className= "btnDescargar">
            DESCARGAR
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default anatomia;
