import React, { useContext } from "react";
import "./top-navigation.scss";
import CloseExercise from "./CloseExercise";
import ProgressBar from "./ProgressBar";
import ProgressBarLineal from "./ProgressBarLineal";
import SuccessBanner from "./SuccessBanner";
import Context from "../../../store/context";
import { useWindowSize } from "react-use";

const TopNavigation = ({ index }) => {
  const { width } = useWindowSize();
  const { isCorrectAnswer } = useContext(Context);

  return (
    <div className="topNavigation">
      <CloseExercise />

      {isCorrectAnswer.value ? (
        <SuccessBanner />
      ) : (
        [
          width >= 768 ? (
            <ProgressBar
              steps={parseInt(localStorage.getItem("numberOfExercises"))}
              index={index}
            />
          ) : (
            <ProgressBarLineal
              steps={parseInt(localStorage.getItem("numberOfExercises"))}
              index={index - 1}
            />
          ),
        ]
      )}
    </div>
  );
};

export default TopNavigation;
