import React from "react";
import "./progress-bar.scss";

const ProgressBar = (props) => {
  return (
    <div className="progressBar">
      <ul>
        {Array.from(Array(props.steps)).map((value, index) => (
          <li>
            {Number(index + 1) < props.index ? (
              <a href="#1" className="doneProgressStep">
                {index + 1}
              </a>
            ) : (
              [
                Number(props.index) === Number(index + 1) ? (
                  <a href="#1" className="currentProgressStep">
                    {index + 1}
                  </a>
                ) : (
                  <a href="#1" className="undoneprogressStep">
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
