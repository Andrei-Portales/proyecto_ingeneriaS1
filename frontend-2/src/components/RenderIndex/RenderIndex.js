import React from "react";
import Tooltip from "@material-ui/core/Tooltip";

const RenderStatus = (props) => {
  return (
    <Tooltip title="Index" placement="bottom" arrow>
      <p
        className="index"
        style={{
          width: "20px",
          textAlign: "right",
          marginRight: "10px",
          marginBottom: "0px",
          // color: "#44cba6",
          color: "#4fd1c5",
        }}
      >
        {props.index}
      </p>
    </Tooltip>
  );
};

export default RenderStatus;
