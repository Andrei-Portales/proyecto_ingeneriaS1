import React from "react";
import { useParams, useHistory } from "react-router";
import { useSelector } from "react-redux";
import TemaItem from "../../components/TemaItem/TemaItem";
import { useGetMaterias } from "../../hooks/useGetMaterias";

import styles from "./Materias.module.scss";

const Materias = () => {
  const isLightTheme = useSelector((state) => state.theme.theme) === "LIGHT";
  const params = useParams();
  const history = useHistory();
  const { temas } = useGetMaterias();

  const materiaClasses = `${styles.materiaPanel} ${
    !isLightTheme && styles["materia-dark"]
  }`;

  const onClickTemaHandler = (id) => {
    history.push(`/grados/${params.grado}/${params.materia}/${id}`);
  };

  return (
    <div className={materiaClasses}>
      <h1 className={styles.temaTitulo}>{params.materia}</h1>

      <div className={styles.materiasListPanel}>
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
  );
};

export default Materias;
