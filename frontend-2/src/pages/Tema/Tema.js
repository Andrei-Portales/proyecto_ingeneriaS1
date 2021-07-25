import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import TemaItemSuggested from "../../components/TemaItem/TemaItemSuggested";

import styles from "./Tema.module.scss";
import { temas } from "../../util/grados-materias";

import { UilImport } from "@iconscout/react-unicons";
import { UilClipboard } from "@iconscout/react-unicons";

const Tema = () => {
  const params = useParams();
  const history = useHistory();
  const isLightTheme = useSelector((state) => state.theme.theme) === "LIGHT";
  const grado = temas[params.grado];
  const materia = grado[params.materia];

  const [showContent, setShowContent] = useState(true);

  const temasItems = [];

  for (let i = 0; i < materia.temas.length; i++) {
    temasItems.push({
      no: i + 1,
      title: materia.temas[i],
    });
  }

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

  const onClickTemaHandler = (id) => {
    history.push(`/grados/${params.grado}/${params.materia}/${id}`);
  };

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
        <div className={styles.tituloContenedor}>
          <h3 className={tituloTema}>Numeracion de 6 cifras</h3>
        </div>
        <div className={styles.opcionesContenedor}>
          <button className={styles.botonDescargar}>
            Descargar PDF <UilImport size="16"></UilImport>{" "}
          </button>
          <button className={styles.botonEjercicios}>
            Ejercicios <UilClipboard size="16"></UilClipboard>{" "}
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
