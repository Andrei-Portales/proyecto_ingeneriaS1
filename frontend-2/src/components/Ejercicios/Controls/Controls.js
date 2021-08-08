import React, { useState } from "react";
import { useHistory } from "react-router";
import "./controls.scss";
import Shuttle from "../../../assets/shuttle.png";
import { UisStar } from "@iconscout/react-unicons-solid";

const Controls = (props) => {
  const history = useHistory();
  const [correct, setCorrect] = useState(false);
  const [selected, setSelected] = useState(0);
  const [shakeAnimation, setShakeAnimation] = useState(false);

  const buttonHelp = `${"buttonHelp"} ${correct ? "buttonHelpHidden" : ""}`;
  const rewardsInside = `${"rewardsInside"} ${
    correct ? "rewardsInsideShow" : ""
  }`;
  const buttonAnswer = `${correct ? "buttonAnswerHidden" : "buttonAnswer"}`;
  const buttonContinue = `${
    correct ? "buttonContinue" : "buttonContinueHidden"
  }`;

  console.log(props.received);

  const verifyAnswer = (i) => {
    if (i === props.received) {
      setCorrect(true);
      console.log(correct);
      setShakeAnimation(false);
    }
    setShakeAnimation(true);
  };

  const nextExercise = () => {
    history.push(`/ejercicio/10002`);
  };
  return (
    <div className="grid">
      <div className="col-3">
        <button className={buttonHelp}>
          <div className="buttonContent">
            <div className="helpButtonIcon">
              <img src={Shuttle} width="30" height="48" alt="Shuttle icon" />
            </div>
            <div className="helpButtonContent">Pista</div>
          </div>
        </button>
      </div>
      <div className="col-6">
        <button
          className={buttonAnswer}
          onClick={() => verifyAnswer(props.received)}
        >
          <div>Responder</div>
        </button>
        <button className={buttonContinue} onClick={() => nextExercise()}>
          <div>Continuar</div>
        </button>
      </div>
      <div className="col-3 rewardsPanel">
        <button className="rewardsButton">
          <div className={rewardsInside}>
            Puntos
            <UisStar className="uilStar" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Controls;
