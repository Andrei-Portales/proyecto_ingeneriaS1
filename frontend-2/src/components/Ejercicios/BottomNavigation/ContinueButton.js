import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import "./continue.scss";
import Context from "../../../store/context";

const Continue = () => {
  let params = useParams();
  const history = useHistory();
  const { isCorrectAnswer } = useContext(Context);

  const nextExercise = () => {
    if (
      Number(localStorage.getItem("numberOfExercises")) !== parseInt(params.id)
    ) {
      history.push(
        `/grados/${localStorage.getItem("grado")}/${localStorage.getItem(
          "materia"
        )}/${localStorage.getItem("temaId")}/ejercicio/${localStorage.getItem(
          "temaId"
        )}/${parseInt(params.id) + 1}`
      );
      window.location.reload();
    } else {
      localStorage.setItem("quizId", "");
      history.push(
        `/grados/${localStorage.getItem("grado")}/${localStorage.getItem(
          "materia"
        )}/${localStorage.getItem("temaId")}`
      );
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
