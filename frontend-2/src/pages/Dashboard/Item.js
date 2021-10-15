import { useContext } from "react";
import "./item.scss";
import Tooltip from "@material-ui/core/Tooltip";
import RenderIndex from "./Components/RenderIndex";
import RenderDate from "../../components/RenderDate/RenderDate";
import ProfileImg from "../../assets/profile.png";
import Context from "../../store/context";

const QuizItem = (props) => {
  // How To Apply SOLID Principles To Clean Your Code in React
  // 1. Move Data Processing Logic Out
  // 3. Decompose UI Components
  const { isItemVisible, activeIndex, actions } = useContext(Context);

  const onItemSelect = (id, index) => {
    actions({
      type: "setActiveIndex",
      payload: { ...activeIndex, value: index },
    });
    props.isItemSelected(true);
    actions({
      type: "setIsItemVisible",
      payload: { ...isItemVisible, value: true },
    });
    props.itemId(id);
  };

  const deleteQuiz = (id) => {
    // DeleteQuiz(id);
  };

  return (
    <li
      className={`tree-item${
        props.index === activeIndex.value ? " selected" : ""
      }`}
      onClick={() => onItemSelect(props.quizId, props.index)}
      key={props.index}
    >
      <div className="tree-row">
        <div className="tree-row-front">
          <RenderIndex index={props.index} />
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
            <Tooltip title="Número de preguntas" placement="top" arrow>
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
                <span className="task-name">{props.tema}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default QuizItem;
