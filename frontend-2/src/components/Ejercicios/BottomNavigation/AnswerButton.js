import React, { useContext } from "react";
import "./answer-button.scss";
import errorAudio from "../../../assets/audio/error_tone.mp3";
import matchAudio from "../../../assets/audio/match_tone.mp3";
import Context from "../../../store/context";

const AnswerButton = ({ correctAnswer }) => {
  let wrongAnswerAudio = new Audio(errorAudio);
  let matchAnswerAudio = new Audio(matchAudio);
  const { selectedAnswer, isCorrectAnswer, isWrongAnswer, actions } =
    useContext(Context);

  const verifyAnswer = () => {
    if (selectedAnswer.value === correctAnswer) {
      actions({
        type: "setIsCorrectAnswer",
        payload: { ...isCorrectAnswer, value: true },
      });

      // // GUEST USER - LOCAL STORAGE POINTS SYSTEM

      let currentPoints = localStorage.getItem("userPoints");

      if (currentPoints === "") {
        localStorage.setItem("userPoints", "25");
      } else {
        let currentPointsInNumber = parseInt(currentPoints, 10);
        localStorage.setItem("userPoints", currentPointsInNumber + 15);
      }
      matchAnswerAudio.play();
      return;
    }
    actions({
      type: "setIsWrongAnswer",
      payload: { ...isWrongAnswer, value: true },
    });
    wrongAnswerAudio.play();
  };

  const className = `${
    isCorrectAnswer.value ? "buttonAnswerHidden" : "buttonAnswer"
  }`;

  return (
    <>
      <button className={className} onClick={() => verifyAnswer()}>
        <div>Responder</div>
      </button>
    </>
  );
};

export default AnswerButton;
