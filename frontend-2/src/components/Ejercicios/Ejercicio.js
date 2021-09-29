import React, { useState, useEffect, useContext } from "react";
import database from "../../firebase";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import "./ejercicio.scss";
import Context from "../../store/context";

import Confetti from "./TopNavigation/Confettii";
import QuestionsPanel from "./QuestionsPanel";
import AnswersPanel from "./AnswersPanel";
import TopNavigation from "./TopNavigation/TopNavigation";
import BottomNavigation from "./BottomNavigation/BottomNavigation";
import ProblemTopbar from "./ProblemTopbar";

const Ejercicio = () => {
  let params = useParams();
  const history = useHistory();
  const [quizId, setQuizId] = useState("");
  const [exerciseList, setExerciseList] = useState([]);
  const { isCorrectAnswer, id, actions } = useContext(Context);

  let working = [];
  const e = history.location.pathname.slice(11, 16);

  const ex10001 = [
    "-MhnQ_VfCidaZVWOVVjj",
    "-MhnQnvXrEHRHPV5kwrO",
    "-MhnQxt-eRfOQ25hK6SC",
    "-MhnR55EU4Sf5mLfa0SY",
    "-Mi-KyTXd6giRYUPn51s",
    "-Mi-WB59w8pxNsF2I9Ok",
    "-Mi-WrMIiIrgaDwqwACx",
    "-Mi-Xgktus16bF0vZAgO",
  ];

  const ex10030 = [
    "-MiO5YSpgvZbzHdWh7G0",
    "-MiOZumWjGOOI2NUgYaZ",
    "-MiSa6u-zEb23qOyPEyU",
    "-MiTGcfvAQf5CMQRYthJ",
    "-MjRlORyo2HfTxJwEJQ4",
  ];

  const ex10040 = ["-MkA2R13xGbReUw1qCCa"];

  if (e === "10001") {
    working = [...ex10001];
  }
  if (e === "10030") {
    working = [...ex10030];
  }
  if (e === "10040") {
    working = [...ex10040];
  }

  // useEffect(() => {
  //       database.ref("quiz").on("value", (snapshot) => {
  //         let list = [];
  //         snapshot.forEach((snap) => {
  //           list.push(snap.val());
  //           if (snap.val().tema_id === "10001") {
  //             setQuizId(snap.val().id);
  //           }
  //         });
  //       });
  // }, []);

  useEffect(() => {
    database
      .ref(`exercises/${working[parseInt(params.id - 1)]}`)
      .on("value", (snapshot) => {
        let list = [];
        snapshot.forEach((snap) => {
          list.push(snap.val());
        });
        setExerciseList(list);

        actions({
          type: "setId",
          payload: { ...id, value: exerciseList[6] },
        });
      });
  }, []);

  let instructions = exerciseList[12];
  let issue = exerciseList[11];

  const answersList = [
    exerciseList[0],
    exerciseList[1],
    exerciseList[2],
    exerciseList[3],
  ];

  const theme = useSelector((state) => state.theme.theme);

  const isLightMode = theme !== "LIGHT";

  const exerciceWrapper = `${"exerciceWrapper"} ${
    isLightMode ? "exerciceWrapperDark" : ""
  }`;

  return (
    <div className={exerciceWrapper}>
      {isCorrectAnswer.value ? <Confetti active={true} /> : ""}
      <TopNavigation index={exerciseList[10]} />
      <div className="problemBody">
        <div className="problemContentWrapper">
          <ProblemTopbar audioSource={exerciseList[5]} />
          <div className="problemContent">
            <QuestionsPanel
              instructions={instructions}
              issue={issue}
              answerUrl={exerciseList[4]}
              version={exerciseList[15]}
              id={exerciseList[8]}
            />
            <AnswersPanel
              answersList={answersList}
              version={exerciseList[15]}
            />
          </div>
        </div>
      </div>
      <BottomNavigation correctAnswer={exerciseList[6]} />
    </div>
  );
};

export default Ejercicio;
