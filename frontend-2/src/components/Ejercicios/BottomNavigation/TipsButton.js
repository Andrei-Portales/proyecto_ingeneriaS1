import { useContext } from "react";
import Shuttle from "../../../assets/shuttle.png";
import "./tips-button.scss";
import { useSelector } from "react-redux";
import TipsModal from "../../../pages/Modals/Tips";
import Context from "../../../store/context";
import { UilQuestion } from "@iconscout/react-unicons";

const Tips = () => {
  const { isCorrectAnswer } = useContext(Context);
  const isLightTheme = useSelector((state) => state.theme.theme) === "LIGHT";

  const className = `${"buttonHelp"} ${
    isCorrectAnswer.value ? "buttonHelpHidden" : ""
  }`;

  const backgroundColor = `${
    !isLightTheme ? "rgba(0, 0, 0, 0.1)" : "#57b9ff"
  } `;

  return (
    <>
      <button
        className={className}
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="buttonContent">
          <div className="helpButtonIcon">
            {/* <img src={Shuttle} width="30" height="48" alt="Shuttle" /> */}
            <UilQuestion size="40" />
          </div>
          {/* <div className="helpButtonContent">Pista</div> */}
        </div>
      </button>
      <TipsModal />
    </>
  );
};

export default Tips;
