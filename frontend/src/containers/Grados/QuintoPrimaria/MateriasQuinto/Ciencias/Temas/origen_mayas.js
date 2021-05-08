import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player/lazy';
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

function origen_mayas() {
  return (
    <Container fluid className="tema-container">
      <Row>
        <Col className="left-section" sm={12} md={7} lg={6}>
          <h1 className="tituloT">Origen de la Vida segun los Mayas</h1>
          <p>
                <br></br><br></br>
                En la mitología maya, Tepeu y Kukulkán (Quetzalcóatl para los aztecas) son referidos como los creadores, 
                los fabricantes, y los antepasados. Eran dos de los primeros seres a existir y se dice que fueron 
                tan sabios como antiguos. Huracán, o el ‘corazón del cielo’, también existió y se le da menos 
                personificación. Él actúa más como una tormenta, de la cual él es el dios. Tepeu y Kukulkán llevan a cabo 
                una conferencia y deciden que, para preservar su herencia, deben crear una raza de seres que puedan adorarlos.
                Huracán realiza el proceso de creación mientras que Tepeu y Kukulkán dirigen el proceso. La Tierra es creada, 
                junto con los animales. El hombre es creado primero de fango pero este se deshace. Convocan a otros dioses
                y crean al hombre a partir de la madera, pero este no posee ninguna alma. finalmente ente a partir del maíz.<br></br><br></br>


                La Tierra fue creada con los animales. El hombre se creó primero del fango, pero este se deshacía. 
                Convocaron a otros dioses y crearon al hombre partiendo de la madera, pero no tenía ninguna alma.
                Al final el hombre se crea a partir del maíz por una cantidad más grande de dioses y el trabajo fue completo.
                <br></br><br></br>

            </p>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
              // /**AQUI VA EL LINK DE YOUTUBE */
              url="https://youtu.be/jw9fMzU_UuE"
              className="react-player"
              playing
              width="100%"
              height="100%"
              controls="true"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default origen_mayas