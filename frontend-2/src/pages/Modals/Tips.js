import React, { useState } from "react";
import "./tips.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

const Tips = ({ isWrong }) => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal show={show} fullscreen={fullscreen} animation={false}>
      <Modal.Header>
        <Modal.Title>Modal</Modal.Title>
        <button onClick={() => handleClose()}>Back</button>
      </Modal.Header>
      <Modal.Body>Modal body content</Modal.Body>
    </Modal>
  );
};
export default Tips;
