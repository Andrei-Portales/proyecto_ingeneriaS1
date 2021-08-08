import React from "react";
import { useHistory } from "react-router";
import "./close-exercise.scss";

const CloseExercise = (props) => {
  const history = useHistory();
  const closeExercise = () => {
    history.push(`/grados/cuarto/${props.tema}`);
  };

  return (
    <div className="exitPanel">
      <p onClick={() => closeExercise()}>X</p>
    </div>
  );
};

export default CloseExercise;
