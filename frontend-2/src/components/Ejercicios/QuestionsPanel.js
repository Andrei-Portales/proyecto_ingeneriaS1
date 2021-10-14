import React, { useState, useEffect, useContext } from "react";
import "./questions-panel.scss";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { css } from "@emotion/react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Context from "../../store/context";

const override = css`
  display: block;
  margin: auto;
  border-color: "#36d7b7";
`;

const QuestionsPanel = (props) => {
  const [url, setUrl] = useState("");
  const { isCorrectAnswer } = useContext(Context);

  const isLightTheme = useSelector((state) => state.theme.theme) === "LIGHT";

  const titleColor = `${!isLightTheme ? "#FFFFFF" : "#000000"}`;

  const imageDisplay = `${isCorrectAnswer.value ? "flex" : "none"}`;
  const display = `${isCorrectAnswer.value ? "none" : "flex"}`;

  return (
    <div className="questionsPanel" style={{ color: titleColor }}>
      {props.instructions} <br />
      <br />
      {props.version === 2 ? (
        <>
          <LazyLoadImage
            effect="blur"
            src={props.issue}
            alt="Exercise"
            style={{ display: display }}
          />
          <img
            src={props.answerUrl}
            alt="Exercise"
            style={{ display: imageDisplay }}
          />
        </>
      ) : (
        <>
          <b>{props.issue}</b>
          <br />
        </>
      )}
      {!url ? (
        <div className="placeholderPanel">
          <ClimbingBoxLoader
            color="#36d7b7"
            loading={true}
            css={override}
            size={18}
          />
        </div>
      ) : null}
    </div>
  );
};

export default QuestionsPanel;
