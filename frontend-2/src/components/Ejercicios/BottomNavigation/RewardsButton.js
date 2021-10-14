import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { UisStar } from "@iconscout/react-unicons-solid";
import "./rewards.scss";
import Context from "../../../store/context";
import { UilSetting } from "@iconscout/react-unicons";
import SettingsModal from "../../../pages/Modals/Settings";

const Rewards = () => {
  const { isCorrectAnswer, showSettings, actions } = useContext(Context);
  const [show, setShow] = useState(false);
  const isLightTheme = useSelector((state) => state.theme.theme) === "LIGHT";

  const backgroundColor = `${
    isCorrectAnswer.value ? "#5cba73" : "rgba(0, 0, 0, 0.1)"
  } `;

  const borderColor = `${!isLightTheme ? "#000000" : "#ffffff"}`;

  const openSettingsModal = () => {
    actions({
      type: "setShowSettings",
      payload: { ...showSettings, value: true },
    });
  };

  return (
    <>
      <button
        className="rewardsButton"
        style={{ backgroundColor: backgroundColor, borderColor: borderColor }}
        onClick={() => openSettingsModal()}
      >
        <div className="rewardsInside">
          {isCorrectAnswer.value ? (
            <>
              <p className="points">+15</p>
              <UisStar className="uilStar" />
            </>
          ) : (
            <UilSetting className="uilSettings" />
          )}
        </div>
      </button>
      <SettingsModal />
    </>
  );
};

export default Rewards;
