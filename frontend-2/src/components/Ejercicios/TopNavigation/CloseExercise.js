import React from "react";
import { useHistory, useParams } from "react-router";
import "./close-exercise.scss";
import { UilTimes } from "@iconscout/react-unicons";

const CloseExercise = () => {
  const params = useParams();
  const history = useHistory();

  console.log(params);
  console.log(params.materia);
  console.log(params.grado);

  const closeExercise = () => {
    const e = history.location.pathname.slice(11, 17);

    if (history.location.pathname.includes("/ejercicio/")) {
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
