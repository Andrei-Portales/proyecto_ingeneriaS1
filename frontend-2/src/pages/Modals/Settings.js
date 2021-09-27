import React, { useState, useContext } from "react";
import "./settings.css";
import Context from "../../store/context";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { UilMultiply } from "@iconscout/react-unicons";

const Settings = (props) => {
  const [id, setId] = useState(
    localStorage.getItem("enabledAudio") === "true" ? "on" : "off"
  );
  const { showSettings, actions } = useContext(Context);

  const handleClose = () => {
    actions({
      type: "setShowSettings",
      payload: { ...showSettings, value: false },
    });
  };

  const onChangeValue = (event) => {
    if (event.target.id === "off") {
      setId("off");
      localStorage.setItem("enabledAudio", false);
    }
    if (event.target.id === "on") {
      setId("on");
      localStorage.setItem("enabledAudio", true);
    }
  };

  return (
    <Modal show={showSettings.value} animation={false}>
      <div className="modalHeader">
        <Modal.Title>Ajustes</Modal.Title>
        <button onClick={() => handleClose()} className="closeButton">
          <UilMultiply />
        </button>
      </div>
      <div className="modalBody">
        <div className="audioSettings">
          <div>Audio</div>
          <div onChange={onChangeValue} className="inputAudio">
            <input
              className="audio_radio_input"
              type="radio"
              name="myRadio"
              id="on"
              checked={id === "on" ? true : false}
            />
            <label className="audio_radio_label" for="on">
              On
            </label>
            <input
              className="audio_radio_input"
              type="radio"
              name="myRadio"
              id="off"
              checked={id === "off" ? true : false}
            />
            <label className="audio_radio_label" for="off">
              Off
            </label>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default Settings;
