import React from "react";
import { useHistory } from "react-router";
import styles from "./congratulation.module.scss";
import "./congratulation.module.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Welcome = () => {
  const history = useHistory();

  const onClickTemaHandler = () => {
    localStorage.setItem("firstTimeAccess", "false");
    localStorage.setItem("userName", "Estudiante 1");
    localStorage.setItem("userPoints", "0");
    localStorage.setItem("userGrade", "4to Grado");
    localStorage.setItem("workingExerciseId", "10001");
    localStorage.setItem("index", 0);

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
export default Welcome;
