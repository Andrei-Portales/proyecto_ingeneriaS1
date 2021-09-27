import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import styles from "./congratulation.module.scss";
import "./congratulation.module.scss";
import { temas } from "../../util/grados-materias";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import InsigniaImg from "../../assets/nytro.png";

const Congratulations = (props) => {
  const history = useHistory();
  const params = useParams();
  const grado = temas[params.grado];
  const materia = grado[params.materia];
  const [show, setShow] = useState(props.show);

  const temasItems = [];

  for (let i = 0; i < materia.temas.length; i++) {
    temasItems.push({
      no: i + 1,
      title: materia.temas[i],
    });
  }

  // temasItems.map((item) => console.log(item.no));

  const onClickTemaHandler = (id) => {
    setShow(false);
    history.push(`/grados/${params.grado}/${params.materia}/${id + 1}`);
  };

  return (
    <Modal show={show} className={styles.modalCongratulations}>
      <div className={styles.modalHeader}>
        <p>!VIDEO COMPLETADO!</p>
      </div>
      <div className={styles.modalBody}>
        <h3 className={styles.titlePoints}>+50 puntos</h3>
        <div className={styles.insigniaContenedor}>
          <img src={InsigniaImg} width="80" height="80" alt="Insignia" />
          <p>Hypesquad insignia</p>
        </div>
      </div>
      <div className={styles.modalFooter}>
        {/* <Button className={styles.nextButton} onClick={() => setShow(false)}> */}
        <Button
          className={styles.nextButton}
          onClick={onClickTemaHandler.bind(null, parseInt(params.id, 10))}
        >
          Siguiente video
        </Button>
      </div>
    </Modal>
  );
};
export default Congratulations;
