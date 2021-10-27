import { useContext } from "react";
import "./tips-button.scss";
import { useSelector } from "react-redux";
import TipsModal from "../../../pages/Modals/Tips";
import Context from "../../../store/context";

const Tips = () => {
  const { isCorrectAnswer } = useContext(Context);
  const isLightTheme = useSelector((state) => state.theme.theme) === "LIGHT";

  const className = `${"buttonHelp"} ${
    isCorrectAnswer.value ? "buttonHelpHidden" : ""
  }`;

  const backgroundColor = `${
    !isLightTheme ? "rgba(0, 0, 0, 0.1)" : "#57b9ff"
  } `;

  const borderColor = `${!isLightTheme ? "#000000" : "#0f83d7"}`;

  return (
    <>
      <button
        className={className}
        style={{ backgroundColor: backgroundColor, borderColor: borderColor }}
      >
        <div className="buttonContent">
          <div className="helpButtonIcon">
            <i className="uil uil-question" size="40"></i>
          </div>
        </div>
      </button>
      <TipsModal />
    </>
  );
};

export default Tips;
