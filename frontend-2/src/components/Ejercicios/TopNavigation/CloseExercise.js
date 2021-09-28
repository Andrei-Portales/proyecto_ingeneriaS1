import React from "react";
import { useHistory } from "react-router";
import "./close-exercise.scss";
import { UilTimes } from "@iconscout/react-unicons";

const CloseExercise = () => {
  const history = useHistory();

  const closeExercise = () => {
    const e = history.location.pathname.slice(11, 16);

    if (history.location.pathname.includes("/ejercicio/")) {
      history.push(
        `/grados/${localStorage.getItem("grado")}/${localStorage.getItem(
          "materia"
        )}/${e}`
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
