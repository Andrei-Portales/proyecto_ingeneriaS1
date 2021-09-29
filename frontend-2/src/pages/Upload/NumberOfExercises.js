import React from "react";
import "./number-of-exercises.scss";

const NumberOfExercises = (props) => {
  const onChangeValue = (event) => {
    if (event.target.value === "4") {
      props.numberOfExercises(4);
    }
    if (event.target.value === "5") {
      props.numberOfExercises(5);
    }
    if (event.target.value === "6") {
      props.numberOfExercises(6);
    }
    if (event.target.value === "7") {
      props.numberOfExercises(7);
    }
    if (event.target.value === "8") {
      props.numberOfExercises(8);
    }
  };

  console.log("numberOfExercises");

  return (
    <div onChange={onChangeValue} className="numberOfExercisesPanel">
      <div className="inputNumberOfExercisesTitle">Número de preguntas</div>
      <div className="inputNumberOfExercises">
        {Array.from(Array(5)).map((value, index) => (
          <>
            <input
              className="radio_input"
              key={index + 4}
              type="radio"
              value={index + 4}
              name="myRadio"
              id={`myRadio${index + 4}`}
            />
            <label className="radio_label" for={`myRadio${index + 4}`}>
              {index + 4}
            </label>
          </>
        ))}
      </div>
    </div>
  );
};

export default NumberOfExercises;
