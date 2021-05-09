/* eslint-disable max-len */
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

function conjuntos() {
  return (
    <Container fluid className="tema-container">
      <Row>
        <Col className="right-section" sm={12} md={7} lg={6}>
          <h1 className="tituloT">CONJUNTOS</h1>
          <p>
            Un conjunto es una colección de elementos con características similares considerada
            en sí misma como un objeto. Los elementos de un conjunto, pueden ser las siguientes:
            personas, números, colores, letras, figuras, etc.
            <br />
            <br />

            REPRESENTACIÓN DE CONJUNTOS
            <br />
            Se representa con una cuerda cerrada llamada "Diagrama de Venn-Euler" o mediante llaves [ ].
            <br />
            <br />
            DETERMINACIÓN DE CONJUNTOS
            <br />
            Se pueden determinar de dos formas:
            <br />
            a) Por extensión:
            <br />
            Cuando mencionamos los elementos del conjunto.
            <br />
            b) Por comprensión:
            <br />
            Cuando solo mencionamos una característica que defina exactamente a todos los elementos.
            <br />
            <br />
            Ejemplos:
            <br />
            - Por extensión:
            <br />
            A = [a, e, i, o, u]
            <br />
            - Por comprensión
            <br />
            A = [las vocales]
            <br />
            <br />

            CLASES DE CONJUNTOS
            <br />
            1º Conjunto finito, es el conjunto formado por un número de elementos que
            podemos nombrar.
            <br />
            2º Conjunto infinito, es el conjunto formado por un número de elementos que no
            podemos terminar de nombrar.
            <br />
            3º Conjunto vacío, es el conjunto que no tiene ningún elemento.
            <br />
            4º Conjunto universal o universo, es el conjunto formado por todos los elementos de una
            misma especie. Se simboliza con la letra "U".
            <br />
            <br />

            ¿PERTENECE O NO PERTENECE?
            <br />
            La relación que se establece entre los elementos y conjuntos es de PERTENENCIA.
            <br />
            <br />
            Notación:
            <br />
            - Si el elemento pertenece al conjunto: 
            <br />
            - Si el elemento no pertenece al conjunto: 
            <br />
            <br />

            RELACIÓN ENTRE CONJUNTOS
            <br />
            Decimos que el conjunto "A" es el subconjunto del conjunto "B", cuando todos los
            elementos de "A" son elementos de "B".
            <br />
            <br />
            Notación:
            <br />
            - Si es subconjunto: 
            <br />
            - Si no es subconjunto: 
            <br />
            * A  B, se lee: "A" está incluido en "B"
            <br />
            * C  B, se lee: "C" no está incluido en "B"
            <br />
            <br />
            Recuerda:
            <br />
            La relación "elemento - conjunto" es:  o 
            <br />
            La relación "conjunto - conjunto" es:  o 
            <br />
            <br />
          </p>
        </Col>
        <Col className="right-section" sm={12} md={5} lg={6}>
          <div className="player-wrapper">
            <ReactPlayer
                /** AQUI VA EL LINK DE YOUTUBE */
              url="https://www.youtube.com/watch?v=3etNpoHQWHs"
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

export default conjuntos;
