import { useState, useRef, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

import { temas } from "../../util/grados-materias";
import Youtube from "./Youtube";

// import TemaItemSuggested from '../../components/TemaItem/TemaItemSuggested'; ha sido eliminado por no ser utilizado

import styles from "./Tema.module.scss";
import { tema as linkTema, downloadTema } from "../../util/links";

import { UilImport } from "@iconscout/react-unicons";
import { UilClipboard } from "@iconscout/react-unicons";

// import savePDF from "@progress/kendo-react-pdf" ha sido eliminado por no ser utilizado en el codigo actual
import { PDFExport } from "@progress/kendo-react-pdf";

const Tema = () => {
  const params = useParams();
  const history = useHistory();
  const isLightTheme = useSelector((state) => state.theme.theme) === "LIGHT";
  const grado = temas[params.grado];
  const materia = grado[params.materia];

  /* setShowContent no es utilizado pero es esencial para el  
  funcionamiento del estado, el cual si es utilizado en el codigo*/
  const [showContent, setShowContent] = useState(true);

  const temasItems = [];
  const currentTema = [];

  for (let i = 0; i < materia.temas.length; i++) {
    temasItems.push(materia.temas[i]);
  }

  temasItems.map((value, index) => {
    if (value.id === params.id) {
      currentTema.push(value);
    }
  });

  const [showDescription, setShowDescription] = useState(false);
  const pdfExportComponent = useRef(null);
  const [tema, setTema] = useState(null);

  const mainClases = `${
    showContent ? styles.videoSection : styles.fullScreenMain
  } ${!isLightTheme ? styles["main-dark"] : ""}`;

  const materiaClasses = `${styles.materia} ${
    !isLightTheme && styles["materia-dark"]
  }`;

  const tituloTema = `${styles.tituloTema} ${
    !isLightTheme && styles["titulo-tema-dark"]
  }`;

  const suggestions = `${styles.suggestionSection} ${
    !isLightTheme ? styles["more-dark"] : ""
  }`;

  // onClickTemaHandler ha sido eliminado por falta de uso dentro del codigo
  // const onClickTemaHandler = (id) => {
  //   history.push(`/grados/${params.grado}/${params.materia}/${id}`);
  // };

  const fetchTemaData = useCallback(async () => {
    try {
      const response = await fetch(linkTema, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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

  const openExercise = () => {
    const workingExerciseId = localStorage.getItem("workingExerciseId");
    if (workingExerciseId === "0") {
      history.push(`/ejercicio/${params.id}/1`);
      return;
    }
    history.push(`/ejercicio/${params.id}/1`);
  };

  return (
    <div className={styles.tema}>
      <div className={`${showContent ? mainClases : mainClases}`}>
        <div className={styles.videoContenedor}>
          {currentTema.map((value, index) => (
            <Youtube videoId={value.videoId} />
          ))}
        </div>
        <div>
          <PDFExport
            ref={pdfExportComponent}
            paperSize="auto"
            margin={40}
            // fileName={tema.title}
            creator="Educa Facil"
          >
            <div className={styles.tituloContenedor}>
              {currentTema.map((value, index) => (
                <h3 className={tituloTema}>{value.title}</h3>
              ))}
            </div>
            <div>
              <div
                className={styles.description}
                style={{ height: showDescription ? "fit-content" : "200px" }}
                // dangerouslySetInnerHTML={{ __html: tema.body }}
              ></div>
              <button
                onClick={toggleShowDescription}
                className={styles.showMoreDescription}
              >
                {showDescription ? "Mostrar menos" : "Mostrar mas"}
              </button>
            </div>
          </PDFExport>
        </div>

        <div className={styles.opcionesContenedor}>
          <a
            className={styles.botonDescargar}
            href={`${downloadTema}/${params.id}`}
            target="_blank"
            rel="noreferrer"
            download
          >
            Descargar PDF <UilImport size="16"></UilImport>{" "}
          </a>
          <button
            className={styles.botonEjercicios}
            onClick={() => openExercise()}
          >
            Ejercicios <UilClipboard size="16"></UilClipboard>{" "}
          </button>
        </div>

        <br />
      </div>

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

              <div className={styles.helpContainer}>
                <span className={styles.questionIconSpan}></span>
                <a
                  href="https://materialeducativo.org/guatematica-para-cuarto-grado/"
                  target="_blank"
                  className={styles.questionTitle}
                  rel="noreferrer"
                >
                  Fuente - MINEDUC 4to Grado
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tema;
