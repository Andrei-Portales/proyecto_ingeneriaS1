import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import styles from "./congratulation.module.scss";
import "./congratulation.module.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Achievements = (props) => {
  const history = useHistory();

  const onClickTemaHandler = () => {
    localStorage.setItem("firstTimeAccess", "false");
    localStorage.setItem("userName", "Estudiante 1");
    localStorage.setItem("userPoints", "0");
    localStorage.setItem("userGrade", "4to Grado");

    localStorage.setItem("currentExercise", "0");

    history.push(`/grados`);
  };

  return (
    <Modal show={true} className={styles.modalCongratulations}>
      <div className={styles.modalHeader}>
        <p>!Bienvenido!</p>
      </div>
      <div className={styles.modalFooter}>
        {/* <Button className={styles.nextButton} onClick={() => setShow(false)}> */}
        <Button
          className={styles.nextButton}
          onClick={onClickTemaHandler.bind()}
        >
          !Comenzar!
        </Button>
      </div>
    </Modal>
  );
};
export default Achievements;
