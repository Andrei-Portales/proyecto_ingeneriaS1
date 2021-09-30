import "../../Upload/subject-selection.scss";

const SubjectSelection = (props) => {
  const handleSubjectSelection = (e) => {
    props.subjectSelection(e.target.value);
  };

  return (
    <select onChange={handleSubjectSelection} value={props.subject}>
      <option>matematicas</option>
      <option>ciencias</option>
      <option>idioma</option>
    </select>
  );
};

export default SubjectSelection;
