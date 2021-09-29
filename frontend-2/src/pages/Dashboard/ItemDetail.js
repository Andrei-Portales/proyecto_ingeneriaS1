import React, { useState } from "react";
import "./item-detail.scss";
import database from "../../firebase";
import { useHistory } from "react-router";

import ProfileImg from "../../assets/profile.png";
import GradeSelection from "../Upload/GradeSelection";
import SubjectSelection from "../Upload/SubjectSelection";
import NumberOfExercises from "../Upload/NumberOfExercises";
import InputTemaId from "../Upload/InputTemaId";
import useGetQuizDetail from "../../hooks/useGetQuizDetail";
import RenderDate from "../../components/RenderDate/RenderDate";
import { UilExpandArrowsAlt } from "@iconscout/react-unicons";

const ItemDetail = (props) => {
  const history = useHistory();

  const [numberOfExercises, setNumberOfExercises] = useState(0);
  const [temaId, setTemaId] = useState("");
  const [grade, setGrade] = useState("4to Grado");
  const [subject, setSubject] = useState("Matemáticas");

  const quizList = useGetQuizDetail(props.itemId);

  // useUpdateQuiz(props.itemId, grade);

  const gradeSelection = (answer) => {
    setGrade(answer);
    database.ref(`quiz/${props.itemId}`).update({ grade: answer });
  };

  const subjectSelection = (answer) => {
    setSubject(answer);
    database.ref(`quiz/${props.itemId}`).update({ subject: answer });
  };
  const answersSelection = (answer) => {
    setNumberOfExercises(answer);
    database
      .ref(`quiz/${props.itemId}`)
      .update({ number_of_exercises: answer });
  };
  const temaIdUpdate = (answer) => {
    setTemaId(answer);
    database.ref(`quiz/${props.itemId}`).update({ tema_id: answer });
  };

  const onQuiz = () => {
    history.push(`/assessment`);
  };

  return (
    <div className="quizDetailContainer">
      <div className="quizHeader">
        <span onClick={() => onQuiz()}>
          <UilExpandArrowsAlt size="18" className="expandArrowAlt" />
        </span>
      </div>
      <div className="quizId">
        <p>{props.itemId}</p>
      </div>
      <div className="userAndDate">
        <div className="user">
          <img src={ProfileImg} alt="Profile" width="27" height="27" />
          <p>Usuario Admin</p>
        </div>
        <div className="date">
          {quizList.map((data) => {
            return <RenderDate key={data.date_added} date={data.date_added} />;
          })}
        </div>
      </div>
      <hr />
      <div className="selectionsToggle">
        {quizList.map((data) => {
          return (
            <>
              <GradeSelection
                gradeSelection={gradeSelection}
                grade={data.grade}
              />
              <SubjectSelection
                subjectSelection={subjectSelection}
                subject={data.subject}
              />
            </>
          );
        })}
      </div>
      <div className="inputTemaId">
        {quizList.map((data) => {
          return (
            <InputTemaId temaIdInput={temaIdUpdate} temaId={data.tema_id} />
          );
        })}
      </div>
      <div className="numberExercises">
        <NumberOfExercises numberOfExercises={answersSelection} />
      </div>
    </div>
  );
};

export default ItemDetail;
