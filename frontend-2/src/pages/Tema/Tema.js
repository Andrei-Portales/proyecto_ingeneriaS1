import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import TemaItemSuggested from '../../components/TemaItem/TemaItemSuggested';
import React from 'react';
import styles from './Tema.module.scss';
import { temas } from '../../util/grados-materias';

import { UilImport } from '@iconscout/react-unicons';
import { UilClipboard } from '@iconscout/react-unicons';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

const Tema = () => {
  const params = useParams();
  const history = useHistory();
  const isLightTheme = useSelector((state) => state.theme.theme) === 'LIGHT';
  const grado = temas[params.grado];
  const materia = grado[params.materia];

  const [showContent, setShowContent] = useState(true);
  const [showDescription, setShowDescription] = useState(false);

  const temasItems = [];
  const pdfExportComponent = React.useRef(null);

  for (let i = 0; i < materia.temas.length; i++) {
    temasItems.push({
      no: i + 1,
      title: materia.temas[i],
    });
  }

  const mainClases = `${
    showContent ? styles.videoSection : styles.fullScreenMain
  } ${!isLightTheme ? styles['main-dark'] : ''}`;

  const materiaClasses = `${styles.materia} ${
    !isLightTheme && styles['materia-dark']
  }`;

  const tituloTema = `${styles.tituloTema} ${
    !isLightTheme && styles['titulo-tema-dark']
  }`;

  const suggestions = `${styles.suggestionSection} ${
    !isLightTheme ? styles['more-dark'] : ''
  }`;

  const onClickTemaHandler = (id) => {
    history.push(`/grados/${params.grado}/${params.materia}/${id}`);
  };

  const exportPDFWithComponent = async () => {
    if (pdfExportComponent.current) {
      setShowDescription(true);
      await new Promise((resolve) => setTimeout(resolve, 200));
      pdfExportComponent.current.save();
    }
  };

  const toggleShowDescription = () =>
    setShowDescription((prevState) => !prevState);

  return (
    <div className={styles.tema}>
      <div className={`${showContent ? mainClases : mainClases}`}>
        <div className={styles.videoContenedor}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/a7aUQQCfuP0"
            title="YouTube video player"
            allow="clipboard-write; encrypted-media; picture-in-picture; autoplay"
            type="text/html"
            frameBorder="0"
            tabIndex="0"
            showInfo="0"
            autoHide="0"
          ></iframe>
        </div>

        <div>
          <PDFExport
            ref={pdfExportComponent}
            paperSize="auto"
            margin={40}
            fileName={`Numeracion hasta de 6 cifras Cuarto Primaria`}
            creator="Educa Facil"
          >
            <div className={styles.tituloContenedor}>
              <h3 className={tituloTema}>Numeracion de 6 cifras</h3>
            </div>

            {/* <h1 className="tituloT">Numeración hasta de 6 cifras</h1> */}

            <div>
              <div
                className={styles.description}
                style={{ height: showDescription ? 'fit-content' : '200px' }}
              >
                <p>
                  Los números nos sirven para contar seres, objetos...,
                  cualquier cantidad de todo lo que nos rodea. Para poder
                  escribir cualquier número, hemos de usar caracteres o
                  símbolos, que hemos de combinar según unas reglas que forman
                  lo que llamamos un sistema de numeración.
                  <br />
                  <br />
                  A lo largo de la historia ha habido distintos sistemas de
                  numeración, como el maya, el chino o el sistema romano, con
                  símbolos y reglas diferentes a los nuestros.Nuestro sistema de
                  numeración decimal procede de la India, aunque fueron los
                  árabes los que lo introdujeron en Europa.
                  <br />
                  <br />
                  Se llama sistema decimal porque 10 unidades de un orden
                  cualquiera forman 1 unidad del orden inmediato superior.Es así
                  que:
                  <br />
                  <br />
                  10 UM = 1DM
                  <br />
                  10 DM = 1CM
                  <br />
                  1 CM en cifras: 100 000
                  <br />
                  1 CM en palabras: cien mil
                  <br />
                  <br />
                  Ejemplo:
                  <br />
                  <br />
                  3 CM = 300 000
                  <br />
                  8 CM = 800 000
                  <br />
                  <br />
                  UBICACIÓN EN EL TABLERO POSICIONAL
                  <br />
                  <br />
                  Para ubicar los números en el tablero posicional comenzamos de
                  derecha a izquierda comenzando por las unidades (U), decenas
                  (D), centenas (C), unidades de millar (UM), decenas de millas
                  (DM) y centenas de millar (CM).
                  <br />
                  <br />
                  LECTURA Y ESCRITURA DE NÚMEROS HASTA LA CENTENA DE MILLAR
                  <br />
                  <br />
                  Para leer cantidades, primero se leen los millares: centenas
                  de millar (CM), decenas de millar (DM) y unidades de millar
                  (UM); y después se leen las centenas (C), decenas (D) y
                  unidades (U).
                  <br />
                  <br />
                  Ejemplo:
                  <br />
                  <br />
                  Número
                  <br />
                  863 574
                  <br />
                  <br />
                  Lectura del número
                  <br />
                  ochocientos sesenta y tres mil quinientos setenta y cuatro
                  <br />
                  <br />
                  Para poder leer los números hasta la centena de millar es
                  importante que formes grupos de tres cifras; es decir,
                  (teniendo en cuenta el ejemplo) 863 el espacio que encontramos
                  se le puede reemplazar con la palabra mil y luego, las últimas
                  tres cifras 574.
                  <br />
                  <br />
                  Para escribir los números hasta la centena de millar se puede
                  seguir la misma recomendación. Comienza de izquierda a derecha
                  con el número que está antes de la palabra mil, (863) el
                  espacio que se deja es por la palabra mil y luego escribe el
                  número que sigue (574).
                  <br />
                  <br />
                  DESCOMPOSICIÓN DE UN NÚMERO
                  <br />
                  <br />
                  Los números se pueden descomponer:
                  <br />
                  <br />
                  • Descomposición según su valor posicional:
                  <br />
                  462 921 = 4CM + 6DM + 2UM + 9C + 2D + 1U
                  <br />
                  936 705 = 9CM + 3DM + 6UM + 7C + 5U
                  <br />
                  <br />
                  • Descomposición en unidades:
                  <br />
                  725 634 = 700 000 + 20 000 + 5 000 + 600 + 30 + 4
                  <br />
                  876 341 = 800 000 + 70 000 + 6 000 + 300 + 40 + 1
                  <br />
                  <br />
                </p>
              </div>
              <button
                onClick={toggleShowDescription}
                className={styles.showMoreDescription}
              >
                {showDescription ? 'Mostrar menos' : 'Mostrar mas'}
              </button>
            </div>
          </PDFExport>
        </div>

        <div className={styles.opcionesContenedor}>
          <button
            className={styles.botonDescargar}
            onClick={exportPDFWithComponent}
          >
            Descargar PDF <UilImport size="16"></UilImport>{' '}
          </button>
          <button className={styles.botonEjercicios}>
            Ejercicios <UilClipboard size="16"></UilClipboard>{' '}
          </button>
        </div>

        <br />
      </div>
      <div className={`${showContent ? suggestions : styles.hideMore}`}>
        <div className={styles.contenidoContenedor}>
          <div className={materiaClasses}>
            <div className={styles.materiasList}>
              {temasItems.map((item) => (
                <div
                  className={styles.esto}
                  onClick={onClickTemaHandler.bind(null, item.no)}
                  key={item.no}
                >
                  <TemaItemSuggested
                    leading={item.no}
                    title={item.title}
                    playingTema={params.id}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tema;
