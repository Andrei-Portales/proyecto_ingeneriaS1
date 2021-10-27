import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import Youtube from "./Youtube";
import TemaItem from "../../components/TemaItem/TemaItem";
import { useGetMaterias } from "../../hooks/useGetMaterias";
// import TemaItemSuggested from '../../components/TemaItem/TemaItemSuggested'; ha sido eliminado por no ser utilizado

import styles from "./Tema.module.scss";
import { tema as linkTema, downloadTema } from "../../util/links";
import { UilImport } from "@iconscout/react-unicons";
import { UilClipboard } from "@iconscout/react-unicons";

// import savePDF from "@progress/kendo-react-pdf" ha sido eliminado por no ser utilizado en el codigo actual
import { PDFExport } from "@progress/kendo-react-pdf";
import { useGetTema } from "../../hooks/useGetTema";

const Tema = () => {
  const params = useParams();
  const history = useHistory();
  const isLightTheme = useSelector((state) => state.theme.theme) === "LIGHT";
  const { temas } = useGetMaterias();
  const { tema } = useGetTema();

  /* setShowContent no es utilizado pero es esencial para el  
  funcionamiento del estado, el cual si es utilizado en el codigo*/
  const [showContent, setShowContent] = useState(true);

  const [showDescription, setShowDescription] = useState(false);
  const pdfExportComponent = useRef(null);

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

  const exportPDFWithComponent = async () => {
    if (pdfExportComponent.current) {
      setShowDescription(true);
      await new Promise((resolve) => setTimeout(resolve, 200));
      pdfExportComponent.current.save();
    }
  };

  const onClickTemaHandler = (id) => {
    localStorage.setItem("grado", params.grado);
    localStorage.setItem("materia", params.materia);
    localStorage.setItem("temaId", id);
    history.push(`/grados/${params.grado}/${params.materia}/${id}`);
  };

  const toggleShowDescription = () =>
    setShowDescription((prevState) => !prevState);

  const openExercise = () => {
    const workingExerciseId = localStorage.getItem("workingExerciseId");
    if (workingExerciseId === "0") {
      history.push(
        `/grados/${params.grado}/${params.materia}/${params.id}/ejercicio/${params.id}/1`
      );
      return;
    }
    history.push(
      `/grados/${params.grado}/${params.materia}/${params.id}/ejercicio/${params.id}/1`
    );
  };

  return (
    <div className={styles.tema}>
      <div className={`${showContent ? mainClases : mainClases}`}>
        <div className={styles.videoContenedor}>
          {tema.map((item, index) => (
            <Youtube videoId={item.video_url} />
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
              {tema.map((item, index) => (
                <h3 className={tituloTema}>{item.title}</h3>
              ))}
            </div>
            <div>
              {tema.map((item) => {
                return (
                  <div
                    className={styles.description}
                    style={{
                      height: showDescription ? "fit-content" : "200px",
                    }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  ></div>
                );
              })}
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
                {temas.map((item, index) => (
                  <>
                    <div
                      onClick={onClickTemaHandler.bind(null, item.tema_id)}
                      key={item.id}
                      className={styles.temaItemPanel}
                    >
                      <TemaItem
                        leading={index + 1}
                        title={item.title}
                        isCompleted={item.isCompleted}
                      />
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tema;
