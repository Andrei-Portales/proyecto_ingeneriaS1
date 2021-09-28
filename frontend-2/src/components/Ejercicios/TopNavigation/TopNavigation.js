import React, { useContext } from "react";
import "./top-navigation.scss";
import { useHistory } from "react-router";
import CloseExercise from "./CloseExercise";
import ProfileAvatar from "./ProfileAvatar";
import ProgressBar from "./ProgressBar";
import ProgressBarLineal from "./ProgressBarLineal";
import SuccessBanner from "./SuccessBanner";
import useGetExercise from "../../../hooks/useGetExercise";
import Context from "../../../store/context";
import { useWindowSize } from "react-use";

const TopNavigation = ({ index }) => {
  const history = useHistory();
  const { width } = useWindowSize();

  const [numberOfExercises] = useGetExercise(
    history.location.pathname.slice(11, 16)
  );

  return (
    <div className="topNavigation">
      <CloseExercise />

      {/* {isCorrectAnswer.value ? (
        <SuccessBanner />
      ) : (
        <ProgressBar steps={numberOfExercises} index={index} />
      )} */}
      {width >= 768 ? (
        <ProgressBar steps={numberOfExercises} index={index} />
      ) : (
        <ProgressBarLineal steps={numberOfExercises} index={index - 1} />
      )}

      {/* <ProfileAvatar /> */}
    </div>
  );
};

export default TopNavigation;
