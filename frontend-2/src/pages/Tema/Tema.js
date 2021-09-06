import { useState, useRef, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
// import TemaItemSuggested from '../../components/TemaItem/TemaItemSuggested';
import styles from './Tema.module.scss';
import { tema as linkTema } from '../../util/links';

import { UilImport } from '@iconscout/react-unicons';
import { UilClipboard } from '@iconscout/react-unicons';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

const Tema = () => {
  const params = useParams();
  const history = useHistory();
  const isLightTheme = useSelector((state) => state.theme.theme) === 'LIGHT';
  const [showContent, setShowContent] = useState(true);
  const [showDescription, setShowDescription] = useState(false);
  const pdfExportComponent = useRef(null);
  const [tema, setTema] = useState(null);

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

  // const onClickTemaHandler = (id) => {
  //   history.push(`/grados/${params.grado}/${params.materia}/${id}`);
  // };

  const fetchTemaData = useCallback(async () => {
    try {
      const response = await fetch(linkTema, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: params.id }),
      });

      const data = await response.json();

      if (data.result) {
        setTema(data.tema);
      }
    } catch (e) {
      console.log(e);
    }
  }, [params]);

  useEffect(() => {
    fetchTemaData();
  }, [fetchTemaData]);

  const exportPDFWithComponent = async () => {
    if (pdfExportComponent.current) {
      setShowDescription(true);
      await new Promise((resolve) => setTimeout(resolve, 200));
      pdfExportComponent.current.save();
    }
  };

  const toggleShowDescription = () =>
    setShowDescription((prevState) => !prevState);

  const onClickExercice = (id) => {
    history.push(`/ejercicio/10001`);
  };

  return (
    <div className={styles.tema}>
      {tema && (
        <div className={`${showContent ? mainClases : mainClases}`}>
          <div className={styles.videoContenedor}>
            <iframe
              className={styles.video}
              src={tema.video_url}
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
              fileName={tema.title}
              creator="Educa Facil"
            >
              <div className={styles.tituloContenedor}>
                <h3 className={tituloTema}>{tema.title}</h3>
              </div>

              {/* <h1 className="tituloT">Numeración hasta de 6 cifras</h1> */}

              <div>
                <div
                  className={styles.description}
                  style={{ height: showDescription ? 'fit-content' : '200px' }}
                  dangerouslySetInnerHTML={{__html: tema.body}}
                ></div>
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
            <button
              className={styles.botonEjercicios}
              onClick={() => onClickExercice(params.id)}
            >
              Ejercicios <UilClipboard size="16"></UilClipboard>{' '}
            </button>
          </div>

          <br />
        </div>
      )}
      <div className={`${showContent ? suggestions : styles.hideMore}`}>
        <div className={styles.contenidoContenedor}>
          <div className={materiaClasses}>
            <div className={styles.materiasList}>
              {/* {temasItems.map((item) => (
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
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tema;
