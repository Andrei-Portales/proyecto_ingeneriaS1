import React from "react";
import { useHistory } from "react-router";
import "./close-exercise.scss";
import { UilTimes } from "@iconscout/react-unicons";

const CloseExercise = () => {
  const history = useHistory();

  const closeExercise = () => {
    if (history.location.pathname.includes("/ejercicio/")) {
      localStorage.setItem("quizId", "");
      history.push(
        `/grados/${localStorage.getItem("grado")}/${localStorage.getItem(
          "materia"
        )}/${localStorage.getItem("temaId")}`
      );
      return;
    }
    history.goBack();
  };

  return (
    <div className="exitPanel">
      <p onClick={() => closeExercise()}>
        <UilTimes className="uilTimes" />
      </p>
    </div>
  );
};

export default CloseExercise;
