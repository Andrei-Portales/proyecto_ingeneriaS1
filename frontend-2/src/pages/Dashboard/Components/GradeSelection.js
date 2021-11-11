import React from "react";
import { Select } from "@chakra-ui/react";

export const GradeSelection = (props) => {
  const handleGradeSelection = (e) => {
    props.gradeSelection(e.target.value);
  };
  return (
    <Select
      bg="#1f2733"
      borderColor="#1f2733"
      mx="10px"
      _focus={{ boxShadow: "none" }}
      onChange={handleGradeSelection}
      value={props.grade}
    >
      <option>cuarto</option>
      <option>quinto</option>
      <option>sexto</option>
    </Select>
  );
};

export default GradeSelection;
