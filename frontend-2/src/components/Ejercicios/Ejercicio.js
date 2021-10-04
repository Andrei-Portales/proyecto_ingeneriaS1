import React, { useContext } from "react";
import { useSelector } from "react-redux";
import "./ejercicio.scss";
import Context from "../../store/context";
import { useGetExercise } from "../../hooks/useGetExercise";
import Confetti from "./TopNavigation/Confettii";
import QuestionsPanel from "./QuestionsPanel";
import AnswersPanel from "./AnswersPanel";
import TopNavigation from "./TopNavigation/TopNavigation";
import BottomNavigation from "./BottomNavigation/BottomNavigation";
import ProblemTopbar from "./ProblemTopbar";

const Ejercicio = () => {
  const { isCorrectAnswer } = useContext(Context);
  const { exercise } = useGetExercise();

  const answersList = [];

  exercise.map((value) => {
    answersList.push(value.answer_one);
    answersList.push(value.answer_two);
    answersList.push(value.answer_three);
    answersList.push(value.answer_four);
  });

  const theme = useSelector((state) => state.theme.theme);

  const isLightMode = theme !== "LIGHT";

  const exerciceWrapper = `${"exerciceWrapper"} ${
    isLightMode ? "exerciceWrapperDark" : ""
  }`;

  return (
    <div className={exerciceWrapper}>
      {isCorrectAnswer.value ? <Confetti active={true} /> : ""}
      {exercise.length <= 0 ? <TopNavigation index={8} /> : null}
      {exercise.map((value) => {
        return (
          <>
            <TopNavigation index={value.order} />
            <div className="problemBody">
              <div className="problemContentWrapper">
                <ProblemTopbar audioSource={value.audio_url} />
                <div className="problemContent">
                  <QuestionsPanel
                    instructions={value.question_title}
                    issue={value.question_subtitle}
                    answerUrl={value.answer_url}
                    version={value.version}
                    id={value.id}
                  />
                  <AnswersPanel
                    answersList={answersList}
                    version={value.version}
                  />
                </div>
              </div>
            </div>
            <BottomNavigation correctAnswer={value.correct_answer} />
          </>
        );
      })}
    </div>
  );
};

export default Ejercicio;
