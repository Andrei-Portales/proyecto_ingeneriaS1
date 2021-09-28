import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import useGetExercise from "../../../hooks/useGetExercise";
import "./continue.scss";
import Context from "../../../store/context";

const Continue = (props) => {
  let params = useParams();
  const history = useHistory();
  const { isCorrectAnswer } = useContext(Context);
  const [numberOfExercises] = useGetExercise(
    history.location.pathname.slice(11, 16)
  );
  const eId = history.location.pathname.slice(11, 16);

  const nextExercise = () => {
    if (Number(numberOfExercises) !== parseInt(params.id)) {
      history.push(`/ejercicio/${eId}/${parseInt(params.id) + 1}`);
      window.location.reload();
    } else {
      history.push(
        `/grados/${localStorage.getItem("grado")}/${localStorage.getItem(
          "materia"
        )}/${eId}`
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
