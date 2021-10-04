import { useEffect, useState } from "react";
import { useParams } from "react-router";
import database from "../firebase";

export const useGetExercise = (props) => {
  const params = useParams();
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    database.ref("exercises").on("value", (snapshot) => {
      let list = [];
      snapshot.forEach((snap) => {
        if (
          snap.val().quiz_id === localStorage.getItem("quizId") &&
          snap.val().order === parseInt(params.id)
        ) {
          list.push(snap.val());
        }
      });
      setExercise(list);
    });
  }, [params.id]);

  return { exercise };
};
