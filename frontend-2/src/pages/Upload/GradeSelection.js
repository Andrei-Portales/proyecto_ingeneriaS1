import React from "react";
import { Select } from "@chakra-ui/react";

export const GradeSelection = ({ gradeSelection, grade }) => {
  const handleGradeSelection = (e) => {
    gradeSelection(e.target.value);
  };

  return (
    <Select
      bg="#1f2733"
      borderColor="#1f2733"
      mx="10px"
      maxWidth="180px"
      _focus={{ boxShadow: "none" }}
      onChange={handleGradeSelection}
      value={grade}
    >
      <option>4to Grado</option>
      <option>5to Grado</option>
      <option>6to Grado</option>
    </Select>
  );
};

export default GradeSelection;
