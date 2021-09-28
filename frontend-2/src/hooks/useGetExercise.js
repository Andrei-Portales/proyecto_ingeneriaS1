import { useEffect, useState } from "react";
import database from "../firebase";

const useGetExercise = (temaId) => {
  const [exerciseList, setExerciseList] = useState([]);
  const [quizId, setQuizId] = useState("");
  const [numberOfExercises, setNumberOfExercises] = useState(0);

  useEffect(() => {
    database.ref("quiz").on("value", (snapshot) => {
      let list = [];
      snapshot.forEach((snap) => {
        list.push(snap.val());
        if (snap.val().tema_id === temaId) {
          console.log("#" + numberOfExercises);
          setNumberOfExercises(snap.val().number_of_exercises);
          setQuizId(snap.val().id);
        }
      });
    });
    // database.ref("exercises").on("value", (snapshot) => {
    //   let list = [];
    //   snapshot.forEach((snap) => {
    //     if (snap.val().quiz_id === quizId) {
    //       list.push(snap.val());
    //     }
    //   });
    //   setExerciseList(list);
    // });
  }, [temaId, numberOfExercises]);

  //   useEffect(() => {
  //     database.ref("exercises").on("value", (snapshot) => {
  //       let list = [];
  //       snapshot.forEach((snap) => {
  //         if (snap.val().quiz_id === quizId) {
  //           list.push(snap.val());
  //         }
  //       });
  //       setExerciseList(list);
  //     });
  //   }, []);
  return [numberOfExercises, quizId];
};

export default useGetExercise;
