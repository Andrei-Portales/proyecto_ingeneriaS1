import "./input-video-id.scss";

const InputVideoId = (props) => {
  const temaIdInputHandler = (e) => {
    props.temaIdInput(e.target.value);
  };

  return (
    <input
      className="inputTema"
      type="text"
      value={props.temaId}
      onChange={temaIdInputHandler}
      placeholder="Video Id"
    />
  );
};

export default InputVideoId;
