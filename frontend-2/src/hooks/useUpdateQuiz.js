import { useEffect, useState } from "react";
import database from "../firebase";

const useUpdateQuiz = (id, grade) => {
  useEffect(() => {
    database.ref("quiz/" + id).update({ grade: grade });
  });
};

export default useUpdateQuiz;
