import React, { useState } from "react";
import "./upload.scss";
import "./quiz-section.scss";
import QuizSectionComponent from "./QuizSection";
import SuccessQuizComponent from "./SuccessQuiz";
import SidebarComponent from "../../components/Sidebar/Sidebars";
import TabOne from "./Tabs/Tab/TabOne";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

// Decompose UI Components
const UploadExercise = () => {
  const [numberOfExercises, setNumberOfExercises] = useState(0);
  const [isQuizCreated, setIsQuizCreated] = useState(false);
  const [quizIdCreated, setQuizIdCreated] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  const numberOfExercisesFunction = (answer) => {
    setNumberOfExercises(answer);
  };

  const quizCreation = (value) => {
    setIsQuizCreated(value);
  };
  const quizIdCreation = (value) => {
    setQuizIdCreated(value);
  };
  const isEmptyFunction = (value) => {
    setIsEmpty(value);
  };

  return (
    <div className="uploadWrapper">
      <SidebarComponent isActive={1} />
      <div className="uploadContentWrapper">
        <div className="contentPanel">
          {isQuizCreated ? (
            <SuccessQuizComponent quizId={quizIdCreated} />
          ) : (
            <QuizSectionComponent
              isQuizCreated={quizCreation}
              quizId={quizIdCreation}
              isEmpty={isEmptyFunction}
              numberOfExercises={numberOfExercisesFunction}
            />
          )}

          <div className="contentBodyWrapper">
            <Tabs
              defaultActiveKey="1"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              {Array.from(Array(numberOfExercises)).map((value, index) => (
                <Tab key={index + 1} eventKey={index + 1} title={index + 1}>
                  <TabOne
                    quizId={quizIdCreated}
                    isEmpty={isEmpty}
                    order={index + 1}
                  />
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadExercise;
