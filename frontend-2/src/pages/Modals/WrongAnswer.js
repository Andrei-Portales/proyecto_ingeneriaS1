import React, { useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import ErrorImg from "../../assets/incorrectcloud.svg";
import "./wrong.css";
import Context from "../../store/context";

const WrongAnswer = () => {
  const { state, isWrongAnswer, actions } = useContext(Context);

  const handleClose = () => {
    actions({ type: "setIsWrongAnswer", payload: { ...state, value: false } });
  };

  useEffect(() => {
    if (isWrongAnswer.value) {
      setTimeout(handleClose, 900);
    }
  });

  return (
    <Modal show={isWrongAnswer.value} animation={false}>
      <div className="body">
        <img src={ErrorImg} width="300" height="300" alt="Error" />
      </div>
    </Modal>
  );
};
export default WrongAnswer;
