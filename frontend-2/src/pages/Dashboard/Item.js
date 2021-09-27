import { useState } from "react";
import "./item.scss";
import Tooltip from "@material-ui/core/Tooltip";
import RenderStatus from "./Components/RenderStatus";
import RenderDate from "../../components/RenderDate/RenderDate";
import ProfileImg from "../../assets/profile.png";
import DeleteQuiz from "../../hooks/useDeleteQuiz";

const QuizItem = (props) => {
  // How To Apply SOLID Principles To Clean Your Code in React
  // 1. Move Data Processing Logic Out
  // 3. Decompose UI Components
  const [chosen, setChosen] = useState(false);

  const onItemSelect = (id) => {
    props.isItemSelected(true);
    props.itemId(id);
    setChosen(true);
  };

  const deleteQuiz = (id) => {
    // DeleteQuiz(id);
  };

  return (
    <li
      className={chosen ? "tree-item active" : "tree-item"}
      onClick={() => onItemSelect(props.quizId)}
    >
      <div className="tree-row">
        <div className="tree-row-front">
          <RenderStatus taskId={props.taskId} completed={1} />
        </div>
        <div className="tree-row-content">
          <div className="task-menu-bar">
            <Tooltip title="Grado" placement="top" arrow>
              <p>{props.grade}</p>
            </Tooltip>
            <Tooltip title="Asignatura" placement="top" arrow>
              <p>{props.subject}</p>
            </Tooltip>
            <Tooltip title="Tema Id" placement="top" arrow>
              <p className="temaId">{props.temaId}</p>
            </Tooltip>
            <Tooltip title="Número de ejercicios" placement="top" arrow>
              <p className="numberOfExercises">{props.numberOfExercises}</p>
            </Tooltip>
            <RenderDate date={props.dateAdded} />
            <img src={ProfileImg} width="27" height="27" alt="Profile" />
            <Tooltip title="Eliminar" placement="top">
              <i
                className="uil uil-trash"
                onClick={() => deleteQuiz(props.quizId)}
              ></i>
            </Tooltip>
          </div>
          <div className="task-name-wrapper">
            <div className="task-name-frame">
              <div className="task-name-frame-border">
                <span className="task-name">{props.quizId}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default QuizItem;
