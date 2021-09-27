import React from "react";
import Tooltip from "@material-ui/core/Tooltip";

const RenderStatus = (props) => {
  const switchTaskStatus = (prop) => {};

  const uncompleteTaskStatus = (propb) => {};

  switch (props.completed) {
    case 0:
      return (
        <Tooltip title="Title" placement="bottom" arrow>
          <i
            className="uil uil-circle"
            onClick={() => switchTaskStatus(props.taskId)}
          ></i>
        </Tooltip>
      );
    case 1:
      return (
        <Tooltip title="Title" placement="bottom" arrow>
          <i
            className="uil uil-check-circle"
            onClick={() => uncompleteTaskStatus(props.taskId)}
          ></i>
        </Tooltip>
      );
    default:
      return (
        <Tooltip title="Title" placement="bottom" arrow>
          <i
            className="uil uil-circle"
            onclick={() => switchTaskStatus(props.taskId)}
          ></i>
        </Tooltip>
      );
  }
};

export default RenderStatus;
