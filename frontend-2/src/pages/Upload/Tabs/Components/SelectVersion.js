import "./select-version.scss";

// Interface Segregation Principle
const SelectionVersion = (props) => {
  const onChangeVersion = (e) => {
    props.exerciseVersion(e.target.value);
  };

  return (
    <div className="selectVersion">
      <div className="versionTitle"> Versión</div>
      <div className="selectionWrapper" onChange={onChangeVersion}>
        {Array.from(Array(2)).map((value, index) => (
          <>
            <input
              className="radio_input"
              key={index + 1}
              type="radio"
              value={index + 1}
              name="version"
              id={`version${index + 1}`}
            />
            <label className="radio_label" for={`version${index + 1}`}>
              {index + 1}
            </label>
          </>
        ))}
      </div>
    </div>
  );
};

export default SelectionVersion;
