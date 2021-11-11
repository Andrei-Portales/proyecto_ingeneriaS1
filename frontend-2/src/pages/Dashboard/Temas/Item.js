import { useContext } from "react";
import "../Ejercicios/item.scss";
import Tooltip from "@material-ui/core/Tooltip";
import RenderIndex from "../Components/RenderIndex";
import RenderDate from "../../../components/RenderDate/RenderDate";
import ProfileImg from "../../../assets/profile.png";
import Context from "../../../store/context";

const TemaItem = (props) => {
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

  const deleteTema = (id) => {};

  return (
    <li
      className={`tree-item${
        props.index === activeIndex.value ? " selected" : ""
      }`}
      onClick={() => onItemSelect(props.id, props.index)}
      key={props.index}
    >
      <div className="tree-row">
        <div className="tree-row-front">
          <RenderIndex index={props.index + 1} />
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
            <Tooltip title="Video Id" placement="top" arrow>
              <p className="videoId">{props.videoId}</p>
            </Tooltip>
            {!isItemVisible.value ? (
              <RenderDate date={props.dateAdded} />
            ) : null}
            <img src={ProfileImg} width="27" height="27" alt="Profile" />
            <Tooltip title="Eliminar" placement="top">
              <i
                className="uil uil-trash"
                onClick={() => deleteTema(props.quizId)}
              ></i>
            </Tooltip>
          </div>
          <div className="task-name-wrapper">
            <div className="task-name-frame">
              <div className="task-name-frame-border">
                <span className="task-name">{props.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TemaItem;
