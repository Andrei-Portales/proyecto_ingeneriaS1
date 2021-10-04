import "./success-quiz.scss";
import SuccessImg from "../../assets/success.png";

const SuccessQuiz = (props) => {
  return (
    <div className="successQuiz">
      <div className="successQuizWrapper">
        <div className="leftSection">
          <img src={SuccessImg} width="110" height="130" alt="Success" />
        </div>

        <div className="rightSection">
          <p>¡Ejercicio creado exitosamente!</p>
          <h4>{props.quizId}</h4>
        </div>
      </div>
    </div>
  );
};

export default SuccessQuiz;
