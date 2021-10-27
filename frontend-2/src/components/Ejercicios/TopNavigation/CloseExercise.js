import React from "react";
import { useHistory } from "react-router";
import "./close-exercise.scss";
import useKeyboardShortcut from "use-keyboard-shortcut";

const CloseExercise = () => {
  const history = useHistory();

  useKeyboardShortcut(["Escape"], () => closeExercise(), {
    overrideSystem: false,
  });

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
        <i className="uil uil-times uilTimes"></i>
      </p>
    </div>
  );
};

export default CloseExercise;
