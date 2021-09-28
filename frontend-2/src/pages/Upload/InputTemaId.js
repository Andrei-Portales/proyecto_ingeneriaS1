import "./input-tema-id.scss";

const InputTema = (props) => {
  const temaIdInputHandler = (e) => {
    props.temaIdInput(e.target.value);
  };

  console.log("inputTemaID");

  return (
    <input
      className="inputTema"
      type="text"
      value={props.temaId}
      onChange={temaIdInputHandler}
      placeholder="Tema Id"
    />
  );
};

export default InputTema;
