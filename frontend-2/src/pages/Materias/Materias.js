import React, { useState } from "react";
import { useParams, useHistory } from "react-router";
import { useSelector } from "react-redux";
import TemaItem from "../../components/TemaItem/TemaItem";

import MateriasProgressComponent from "./MateriasProgress";
import NavigationComponent from "./Navigation";

import styles from "./Materias.module.scss";
import { temas } from "../../util/grados-materias";

const Materias = () => {
  const isLightTheme = useSelector((state) => state.theme.theme) === "LIGHT";
  const params = useParams();
  const history = useHistory();
  const grado = temas[params.grado];
  const materia = grado[params.materia];

  const temasItems = [];
  const completedItems = [];

  for (let i = 0; i < materia.temas.length; i++) {
    temasItems.push(materia.temas[i]);
  }

  temasItems.map((value, index) => {
    if (value.isCompleted) {
      completedItems.push(value);
    }
  });

  const materiaClasses = `${styles.materiaPanel} ${
    !isLightTheme && styles["materia-dark"]
  }`;

  const onClickTemaHandler = (id) => {
    history.push(`/grados/${params.grado}/${params.materia}/${id}`);
  };

  const progressPercentage = Math.round(
    (completedItems.length / temasItems.length) * 100
  );

  localStorage.setItem("materia", params.materia);

  return (
    <div className={materiaClasses}>
      <h1 className={styles.temaTitulo}>{materia.title}</h1>
      {/* <MateriasProgressComponent progressPercentage={progressPercentage} /> */}

      <div className={styles.materiasListPanel}>
        {temasItems.map((item, index) => (
          <>
            <div
              onClick={onClickTemaHandler.bind(null, item.id)}
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
      {/* <NavigationComponent /> */}
    </div>
  );
};

export default Materias;
