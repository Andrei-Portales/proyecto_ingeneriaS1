/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import "./bottom-navigation.scss";
import TipsButton from "./TipsButton";
import ContinueButton from "./ContinueButton";
import AnswerButton from "./AnswerButton";
import RewardsButton from "./RewardsButton";
import Context from "../../../store/context";

const BottomNavigation = ({ correctAnswer }) => {
  const { isWrongAnswer, actions } = useContext(Context);
  const [className, setClassName] = useState("footer");

  console.log(isWrongAnswer.value);

  useEffect(() => {
    if (isWrongAnswer.value) {
      setClassName("animate__animated animate__shakeX footer");
      setTimeout(handleShake, 900);
    }
  }, [isWrongAnswer.value]);

  const handleShake = () => {
    setClassName("footer");
    actions({
      type: "setIsWrongAnswer",
      payload: { ...isWrongAnswer, value: false },
    });
  };

  return (
    <div className="bottomNavigation">
      <div className={className}>
        <div className="grid">
          <div className="col-3 tipsPanel">
            <TipsButton />
          </div>
          <div className="col-6 answerAndRewardsPanel">
            <AnswerButton correctAnswer={correctAnswer} />
            <ContinueButton />
          </div>
          <div className="col-3 rewardsPanel">
            <RewardsButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
