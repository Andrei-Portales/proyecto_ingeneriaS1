import React, { useState } from "react";
import { useHistory } from "react-router";
import "./exercise-10003.scss";

import ProgressBar from "../../TopNavigation/ProgressBar";
import SuccessBanner from "../../TopNavigation/SuccessBanner";
import CloseExercise from "../../TopNavigation/CloseExercise";
import ProfileAvatar from "../../TopNavigation/ProfileAvatar";
import Confetti from "../../TopNavigation/Confettii";

import errorAudio from "../../../../assets/audio/error_tone.mp3";
import matchAudio from "../../../../assets/audio/match_tone.mp3";
import Shuttle from "../../../../assets/shuttle.png";
import { UisStar } from "@iconscout/react-unicons-solid";

const Exercise10000 = (props) => {
  const history = useHistory();
  const [correct, setCorrect] = useState(false);
  const [seleced, setSelected] = useState(0);

  let wrongAnswerAudio = new Audio(errorAudio);
  let matchAnswerAudio = new Audio(matchAudio);

  const buttonHelp = `${"buttonHelp"} ${correct ? "buttonHelpHidden" : ""}`;
  const rewardsInside = `${"rewardsInside"} ${
    correct ? "rewardsInsideShow" : ""
  }`;
  const buttonAnswer = `${correct ? "buttonAnswerHidden" : "buttonAnswer"}`;
  const buttonContinue = `${
    correct ? "buttonContinue" : "buttonContinueHidden"
  }`;

  const onChangeValue = (event) => {
    if (event.target.value === "1") {
      setSelected(1);
    }
    if (event.target.value === "2") {
      setSelected(2);
    }
    if (event.target.value === "3") {
      setSelected(3);
    }
    if (event.target.value === "4") {
      setSelected(4);
    }
  };

  const verifyAnswer = (i) => {
    if (i === 3) {
      setCorrect(true);
      matchAnswerAudio.play();
      return;
    }
    wrongAnswerAudio.play();
  };

  const nextExercise = () => {
    history.push(`/ejercicio/10004`);
  };

  return (
    <div className="exerciceWrapper">
      {correct ? <Confetti /> : ""}
      <div className="panel">
        <CloseExercise tema={"matematicas"} />
        {correct ? <SuccessBanner /> : <ProgressBar steps={8} index={3} />}
        <ProfileAvatar />
      </div>
      <div className="problemBody">
        <div className="problemContentWrapper">
          <div className="problemContent">
            <div className="problemContentTextBlock">
              <div className="problemContentEmoji">
                {/* <img src={Shuttle} /> */}
              </div>
              <div className="problemContentText">
                Escriba el número que corresponde
                <br />
                <br />
                <b> quinientos dieciocho mil seiscientos</b>
                <br />
                <br />
                <br />
                <div onChange={onChangeValue} className="inputAnswersPanel">
                  <input
                    className="radio_input"
                    type="radio"
                    value="1"
                    name="myRadio"
                    id="myRadio1"
                  />
                  <label className="radio_label" for="myRadio1">
                    508,600
                  </label>
                  <input
                    className="radio_input"
                    type="radio"
                    value="2"
                    name="myRadio"
                    id="myRadio2"
                  />
                  <label className="radio_label" for="myRadio2">
                    500,600
                  </label>
                  <input
                    className="radio_input"
                    type="radio"
                    value="3"
                    name="myRadio"
                    id="myRadio3"
                  />
                  <label className="radio_label" for="myRadio3">
                    518,600
                  </label>
                </div>
              </div>
            </div>
            <div className="problemVariants"></div>
          </div>
        </div>
      </div>
      <div className="layoutPageFooter">
        <div className="footer">
          <div className="grid">
            <div className="col-3">
              <button className={buttonHelp}>
                <div className="buttonContent">
                  <div className="helpButtonIcon">
                    <img
                      src={Shuttle}
                      width="30"
                      height="48"
                      alt="Hints avatar"
                    />
                  </div>
                  <div className="helpButtonContent">Pista</div>
                </div>
              </button>
            </div>
            <div className="col-6">
              <button
                className={buttonAnswer}
                onClick={() => verifyAnswer(seleced)}
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
        </div>
      </div>
    </div>
  );
};

export default Exercise10000;
