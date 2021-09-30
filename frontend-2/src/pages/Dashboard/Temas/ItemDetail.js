import React, { useState } from "react";
import "../item-detail.scss";
import database from "../../../firebase";
import ProfileImg from "../../../assets/profile.png";
import GradeSelection from "../Components/GradeSelection";
import SubjectSelection from "../Components/SubjectSelection";
import InputTemaId from "../../Upload/InputTemaId";
import InputVideoId from "../Components/InputVideoId";
import InputTemaTitle from "../Components/InputTemaTitle";
import useGetTemaDetail from "../../../hooks/useGetTemaDetail";
import RenderDate from "../../../components/RenderDate/RenderDate";
import { UilExpandArrowsAlt } from "@iconscout/react-unicons";

const ItemDetail = ({ itemId }) => {
  const [grade, setGrade] = useState("6to Grado");
  const [subject, setSubject] = useState("Matemáticas");

  const tema = useGetTemaDetail(itemId);

  const temaTitleUpdate = (answer) => {
    database.ref(`temas/${itemId}`).update({ title: answer });
  };

  const gradeSelection = (answer) => {
    setGrade(answer);
    database.ref(`temas/${itemId}`).update({ grade: answer });
  };

  const subjectSelection = (answer) => {
    setSubject(answer);
    database.ref(`temas/${itemId}`).update({ subject: answer });
  };
  const temaIdUpdate = (answer) => {
    database.ref(`temas/${itemId}`).update({ tema_id: answer });
  };

  const videoIdUpdate = (answer) => {
    database.ref(`temas/${itemId}`).update({ video_url: answer });
  };

  tema.map((data, index) => {
    return console.log(data.grade);
  });

  const onClose = () => {};

  return (
    <div className="quizDetailContainer">
      <div className="quizHeader">
        <span onClick={() => onClose()}>
          {/* <UilExpandArrowsAlt size="18" className="expandArrowAlt" /> */}
        </span>
      </div>
      <div className="quizId">
        {tema.map((data) => {
          return (
            <InputTemaTitle
              temaTitleInput={temaTitleUpdate}
              title={data.title}
            />
          );
        })}
      </div>
      <div className="userAndDate">
        <div className="user">
          <img src={ProfileImg} alt="Profile" width="27" height="27" />
          <p>Usuario Admin</p>
        </div>
        <div className="date">
          {tema.map((data) => {
            return <RenderDate key={data.date_added} date={data.date_added} />;
          })}
        </div>
      </div>
      <hr />
      <div className="selectionsToggle">
        {tema.map((data) => {
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
        {tema.map((data) => {
          return (
            <>
              <InputTemaId temaIdInput={temaIdUpdate} temaId={data.tema_id} />
              <InputVideoId
                temaIdInput={videoIdUpdate}
                temaId={data.video_url}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ItemDetail;
