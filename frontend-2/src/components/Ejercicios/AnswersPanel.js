import React, { useContext } from "react";
import { useSelector } from "react-redux";
import "./answers-panel.scss";
import Context from "../../store/context";
import { useInputWidth } from "../../hooks/useInputWidth";

const AnswersPanel = ({ answersList, version }) => {
  const { selectedAnswer, isCorrectAnswer, actions } = useContext(Context);
  const isLightTheme = useSelector((state) => state.theme.theme) === "LIGHT";
  const { inputWidth } = useInputWidth(answersList.filter(Boolean).length);

  const onChangeValue = (event) => {
    actions({
      type: "setSelectedAnswer",
      payload: { ...selectedAnswer, value: event.target.value },
    });
  };

  const radio_label = `${
    isCorrectAnswer.value ? "radio_label pointerEvents" : "radio_label"
  }`;

  const radioImageLabel = `${
    isCorrectAnswer.value ? "radioImageLabel pointerEvents" : "radioImageLabel"
  }`;

  const backgroundColor = `${!isLightTheme ? "#2e3247" : ""}`;
  // const backgroundColor = `${!isLightTheme ? "#161b22" : ""}`;
  // const backgroundColor = `${!isLightTheme ? "#2b2e44" : ""}`;
  // const backgroundColor = `${!isLightTheme ? "#141f2f" : ""}`;
  const radioBackgroundColor = `${!isLightTheme ? "#393c52" : "#FFFFFF"}`;
  // const radioBackgroundColor = `${
  //   !isLightTheme ? "rgba(0, 0, 0, 0.1)" : "#FFFFFF"
  // }`;
  const radioColor = `${!isLightTheme ? "#FFFFFF" : "#39414b"}`;
  const radioBorderColor = `${!isLightTheme ? "#393c52" : "#d0d8e5"}`;
  // const radioBorderColor = `${!isLightTheme ? "#161f2f" : "#d0d8e5"}`;

  return (
    <div
      onChange={onChangeValue}
      className="inputAnswersPanel"
      style={{ backgroundColor: backgroundColor }}
    >
      {answersList.map((value, index) => (
        <>
          {value === ""
            ? ""
            : [
                version === 3 ? (
                  <>
                    <input
                      className="radio_input"
                      type="radio"
                      value={value}
                      name="myRadio"
                      id={`myRadio${index + 1}`}
                    />
                    <label
                      className={radioImageLabel}
                      for={`myRadio${index + 1}`}
                      style={{
                        backgroundColor: radioBackgroundColor,
                        borderColor: radioBorderColor,
                      }}
                    >
                      <img src={value} alt="Angulo " />
                    </label>
                  </>
                ) : (
                  <>
                    <input
                      className="radio_input"
                      type="radio"
                      value={value}
                      name="myRadio"
                      id={`myRadio${index + 1}`}
                    />

                    <label
                      className={radio_label}
                      for={`myRadio${index + 1}`}
                      style={{
                        backgroundColor: radioBackgroundColor,
                        color: radioColor,
                        borderColor: radioBorderColor,
                        width: inputWidth,
                      }}
                    >
                      {value}
                      {/* {isCorrectAnswer.value ? (
                        <UilCheck className="uilCheck" />
                      ) : (
                        ""
                      )} */}
                    </label>
                  </>
                ),
              ]}
        </>
      ))}
    </div>
  );
};
export default AnswersPanel;
