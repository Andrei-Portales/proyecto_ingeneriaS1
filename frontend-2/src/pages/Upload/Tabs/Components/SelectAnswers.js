import "./select-answers.scss";

const InputAnswers = (props) => {
  const onChangeNumberOfAnswers = (e) => {
    props.selectionNumberOfAnswers(parseInt(e.target.value, 10));
  };

  return (
    <div className="selectionAnswers" onChange={onChangeNumberOfAnswers}>
      <div className="selectionTitle">Respuestas</div>
      <div className="selectionWrapper">
        {Array.from(Array(3)).map((value, index) => (
          <>
            <input
              className="radio_input"
              key={index + 2}
              type="radio"
              value={index + 2}
              name="answer"
              id={`answer${index + 2}`}
            />
            <label className="radio_label" for={`answer${index + 2}`}>
              {index + 2}
            </label>
          </>
        ))}
      </div>
    </div>
  );
};

export default InputAnswers;
