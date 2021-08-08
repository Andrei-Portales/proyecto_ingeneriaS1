import React, { useState } from "react";
import { useHistory } from "react-router";
import "./exercice-10001.scss";

import ProgressBar from "../../TopNavigation/ProgressBar";
import SuccessBanner from "../../TopNavigation/SuccessBanner";
import CloseExercise from "../../TopNavigation/CloseExercise";
import ProfileAvatar from "../../TopNavigation/ProfileAvatar";
import Confetti from "../../TopNavigation/Confettii";

import errorAudio from "../../../../assets/audio/error_tone.mp3";
import matchAudio from "../../../../assets/audio/match_tone.mp3";
import Shuttle from "../../../../assets/shuttle.png";
import { UisStar } from "@iconscout/react-unicons-solid";

const Exercise10001 = (props) => {
  const history = useHistory();
  const [correct, setCorrect] = useState(false);
  const [shakeAnimation, setShakeAnimation] = useState(false);
  const [selected, setSelected] = useState(0);

  let wrongAnswerAudio = new Audio(errorAudio);
  let matchAnswerAudio = new Audio(matchAudio);

  const buttonHelp = `${"buttonHelp"} ${correct ? "buttonHelpHidden" : ""}`;
  const rewardsInside = `${"rewardsInside"} ${correct ? "rewardsInsideShow" : ""
    }`;
  const buttonAnswer = `${correct ? "buttonAnswerHidden" : "buttonAnswer"}`;
  const buttonContinue = `${correct ? "buttonContinue" : "buttonContinueHidden"
    }`;

  const radio_label = `${correct ? "radio_label pointerEvents" : "radio_label"
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
    console.log(event.target.value);
  };

  const verifyAnswer = (i) => {
    if (i === 2) {
      setCorrect(true);
      setShakeAnimation(false);
      matchAnswerAudio.play();
      return;
    }
    wrongAnswerAudio.play();
    setShakeAnimation(true);
  };

  const footer = `${shakeAnimation ? "footer" : "footer "}`;

  const nextExercise = () => {
    history.push(`/ejercicio/10002`);
  };

  return (
    <div className="exerciceWrapper">
      {correct ? <Confetti active={true} /> : ""}
      <div className="panel">
        <CloseExercise tema={"matematicas"} />
        {correct ? <SuccessBanner /> : <ProgressBar steps={8} index={1} />}
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
                Coloque la coma en el lugar adecuado
                <br />
                <br />
                <b>179453</b>
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
                  <label className={radio_label} for="myRadio1">
                    17,9453
                  </label>
                  <input
                    className="radio_input"
                    type="radio"
                    value="2"
                    name="myRadio"
                    id="myRadio2"
                  />
                  <label className={radio_label} for="myRadio2">
                    179,453
                  </label>
                  <input
                    className="radio_input"
                    type="radio"
                    value="3"
                    name="myRadio"
                    id="myRadio3"
                  />
                  <label className={radio_label} for="myRadio3">
                    1,79453
                  </label>
                  <input
                    className="radio_input"
                    type="radio"
                    value="4"
                    name="myRadio"
                    id="myRadio4"
                  />
                  <label className={radio_label} for="myRadio4">
                    1794,53
                  </label>
                </div>
              </div>
            </div>
            <div className="problemVariants"></div>
          </div>
        </div>
      </div>
      <div className="layoutPageFooter">
        <div className={footer}>
          {/* <Controls answer={2} received={selected} /> */}
          <div className="grid">
            <div className="col-3">
              <button className={buttonHelp}>
                <div className="buttonContent">
                  <div className="helpButtonIcon">
                    <img src={Shuttle} width="30" height="48" alt="Shuttle" />
                  </div>
                  <div className="helpButtonContent">Pista</div>
                </div>
              </button>
            </div>
            <div className="col-6">
              <button
                className={buttonAnswer}
                onClick={() => verifyAnswer(selected)}
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

export default Exercise10001;
