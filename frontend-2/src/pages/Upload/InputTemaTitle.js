import "./input-tema-id.scss";

const InputTemaTitle = (props) => {
  const temaTitleInputHandler = (e) => {
    props.temaTitleInput(e.target.value);
  };

  return (
    <input
      className="inputTema"
      type="text"
      value={props.temaTitle}
      onChange={temaTitleInputHandler}
      placeholder="Nombre del tema"
    />
  );
};

export default InputTemaTitle;
