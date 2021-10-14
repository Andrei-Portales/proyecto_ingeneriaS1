import { useEffect, useState } from "react";
import { useParams } from "react-router";
import database from "../firebase";

export const useGetExercise = () => {
  const params = useParams();
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    database.ref("exercises").on("value", (snapshot) => {
      let list = [];

      snapshot.forEach((snap) => {
        // console.log("List: " + snap.val().toString);
        if (
          snap.val().quiz_id === localStorage.getItem("quizId") &&
          snap.val().order === parseInt(params.id)
        ) {
          // list.push(snap.val());

          setExercise(snap.val());
        }
      });
      // console.log(list[0].order);
      // setExercise(list[0]);
    });
  }, [params.id]);

  return { exercise };
};
