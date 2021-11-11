import { Select } from "@chakra-ui/react";

const SubjectSelection = (props) => {
  const handleSubjectSelection = (e) => {
    props.subjectSelection(e.target.value);
  };

  return (
    <Select
      bg="#1f2733"
      borderColor="#1f2733"
      mx="10px"
      _focus={{ boxShadow: "none" }}
      onChange={handleSubjectSelection}
      value={props.subject}
    >
      <option>matematicas</option>
      <option>ciencias</option>
      <option>idioma</option>
    </Select>
  );
};

export default SubjectSelection;
