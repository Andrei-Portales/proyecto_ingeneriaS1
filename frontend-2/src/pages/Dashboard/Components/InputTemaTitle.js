import "./input-tema-title.scss";

const InputTemaTitle = (props) => {
  const temaIdInputHandler = (e) => {
    props.temaTitleInput(e.target.value);
  };

  return (
    <input
      className="inputTemaTitle"
      type="text"
      value={props.title}
      onChange={temaIdInputHandler}
    />
  );
};

export default InputTemaTitle;
