import React from "react";
import "./grade-selection.scss";

export const GradeSelection = ({ gradeSelection, grade }) => {
  const handleGradeSelection = (e) => {
    gradeSelection(e.target.value);
  };

  console.log("IN: " + grade);

  return (
    <select onChange={handleGradeSelection} value={grade}>
      <option>4to Grado</option>
      <option>5to Grado</option>
      <option>6to Grado</option>
    </select>
  );
};

export default GradeSelection;
