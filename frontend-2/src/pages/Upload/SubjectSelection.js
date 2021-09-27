import "./subject-selection.scss";

const SubjectSelection = (props) => {
  const handleSubjectSelection = (e) => {
    props.subjectSelection(e.target.value);
  };

  console.log("subjectSelection");

  return (
    <select onChange={handleSubjectSelection} value={props.subject}>
      <option>Matemáticas</option>
      <option>Ciencias</option>
      <option>Idioma</option>
    </select>
  );
};

export default SubjectSelection;
