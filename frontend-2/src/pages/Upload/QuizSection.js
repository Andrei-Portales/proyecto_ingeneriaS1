import React, { useState } from "react";
import NumberOfExercisesComponent from "./NumberOfExercises";
import SubjectSelectionComponent from "./SubjectSelection";
import GradeSelectionComponent from "./GradeSelection";
import InputTemaIdComponent from "./InputTemaId";
import InputTemaTitle from "./InputTemaTitle";
import database from "../../firebase";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const QuizSection = (props) => {
  const [numberOfExercises, setNumberOfExercises] = useState(0);
  const [temaId, setTemaId] = useState("");
  const [temaTitle, setTemaTitle] = useState("");
  const [grade, setGrade] = useState("4to Grado");
  const [subject, setSubject] = useState("Matemáticas");

  const currentDate = new Date();
  const timestamp = currentDate.getTime(); // Milliseconds

  // GENERATE NEW QUIZ
  const handleSubmit = () => {
    let isNumber = /^\d+$/.test(temaId);
    if (temaId !== "") {
      if (isNumber) {
        var quizRef = database.ref("quiz");
        var newQuizRef = quizRef.push();
        props.quizId(newQuizRef.key);
        newQuizRef.set(
          {
            number_of_exercises: numberOfExercises,
            grade: grade,
            subject: subject,
            tema: temaTitle,
            tema_id: temaId,
            date_added: timestamp.toString(),
            id: newQuizRef.key,
          },
          (error) => {
            if (error) {
              toast.error(error);
            } else {
              props.isQuizCreated(true);
              props.isEmpty(false);
            }
          }
        );
      } else {
        toast.error("Tema Id invalido");
      }
    } else {
      toast.error("Tema Id es requerido");
      return;
    }
  };

  const numberOfExercisesFunction = (value) => {
    props.numberOfExercises(value);
    setNumberOfExercises(value);
  };

  const gradeSelection = (answer) => {
    setGrade(answer);
  };

  const subjectSelection = (answer) => {
    setSubject(answer);
  };

  const temaIdInput = (answer) => {
    setTemaId(answer);
  };

  const temaTitleInput = (answer) => {
    setTemaTitle(answer);
  };

  return (
    <div className="generateQuizSection">
      <NumberOfExercisesComponent
        numberOfExercises={numberOfExercisesFunction}
      />
      <div className="selectionsWrapper">
        <div className="selection">
          <GradeSelectionComponent
            gradeSelection={gradeSelection}
            grade={grade}
          />
          <SubjectSelectionComponent
            subjectSelection={subjectSelection}
            subject={subject}
          />
          <InputTemaIdComponent temaIdInput={temaIdInput} temaId={temaId} />

          <InputTemaTitle
            temaTitleInput={temaTitleInput}
            temaTitle={temaTitle}
          />

          <button
            className="exerciseUploadButton"
            onClick={() => handleSubmit()}
          >
            Generar Quiz
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default QuizSection;
