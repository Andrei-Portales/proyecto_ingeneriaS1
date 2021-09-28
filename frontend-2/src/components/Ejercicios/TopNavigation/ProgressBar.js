import React from "react";
import { useSelector } from "react-redux";
import "./progress-bar.scss";

const ProgressBar = (props) => {
  const isLightTheme = useSelector((state) => state.theme.theme) === "LIGHT";

  const undoneColor = `${!isLightTheme ? "#51677b" : "#FFFFFF"}`;
  const undoneBackground = `${
    !isLightTheme ? "rgba(0, 0, 0, 0.1)" : "rgba(204, 204, 204, 0.4)"
  }`;

  return (
    <div className="progressBar">
      <ul>
        {Array.from(Array(props.steps)).map((value, index) => (
          <li className={`progressListItem${props.steps}`} key={index + 1}>
            {Number(index + 1) < props.index ? (
              <a href="#1" className="doneProgressStep" key={index + 1}>
                {index + 1}
              </a>
            ) : (
              [
                Number(props.index) === Number(index + 1) ? (
                  <a href="#1" className="currentProgressStep" key={index + 1}>
                    {index + 1}
                  </a>
                ) : (
                  <a
                    href="#1"
                    className="undoneprogressStep"
                    key={index + 1}
                    style={{
                      color: undoneColor,
                      backgroundColor: undoneBackground,
                    }}
                  >
                    {index + 1}
                  </a>
                ),
              ]
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressBar;
