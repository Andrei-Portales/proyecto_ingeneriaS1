import { Select } from "@chakra-ui/react";

const SubjectSelection = (props) => {
  const handleSubjectSelection = (e) => {
    props.subjectSelection(e.target.value);
  };

  return (
    <Select
      bg="#1f2733"
      borderColor="#1f2733"
      maxWidth="180px"
      _focus={{ boxShadow: "none" }}
      onChange={handleSubjectSelection}
      value={props.subject}
    >
      <option>Matemáticas</option>
      <option>Ciencias</option>
      <option>Idioma</option>
    </Select>
  );
};

export default SubjectSelection;
