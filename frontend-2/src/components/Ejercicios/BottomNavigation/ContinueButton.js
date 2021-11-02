import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import "./continue.scss";
import Context from "../../../store/context";

const Continue = () => {
  let params = useParams();
  const history = useHistory();
  const { isCorrectAnswer, actions, loading } = useContext(Context);
  const materia = localStorage.getItem("materia");
  const grado = localStorage.getItem("grado");
  const temaId = localStorage.getItem("temaId");
  const numberOfExercises = localStorage.getItem("numberOfExercises");

  const nextExercise = () => {
    // IR AL SIGUIENTE EJERCICIO
    if (Number(numberOfExercises) !== parseInt(params.id)) {
      actions({ type: "setLoading", payload: { ...loading, value: true } });
      history.push(
        `/grados/${grado}/${materia}/${temaId}/ejercicio/${temaId}/${
          parseInt(params.id) + 1
        }`
      );
      window.location.reload();
    } else {
      // REGRESAR A LA SECCION DE TEMAS
      localStorage.setItem("quizId", "");
      history.push(`/grados/${grado}/${materia}/${temaId}`);
    }
  };

  const className = `${
    isCorrectAnswer.value ? "buttonContinue" : "buttonContinueHidden"
  }`;

  return (
    <button className={className} onClick={() => nextExercise()}>
      <div>Continuar</div>
    </button>
  );
};

export default Continue;
