import React from "react";
import "./bottom-navigation.scss";
import TipsButton from "./TipsButton";
import ContinueButton from "./ContinueButton";
import AnswerButton from "./AnswerButton";
import RewardsButton from "./RewardsButton";

const BottomNavigation = ({ correctAnswer }) => {
  return (
    <div className="bottomNavigation">
      <div className="footer">
        <div className="grid">
          <div className="col-3 tipsPanel">
            <TipsButton />
          </div>
          <div className="col-6 answerAndRewardsPanel">
            <AnswerButton correctAnswer={correctAnswer} />
            <ContinueButton nextExercise="10002" />
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
