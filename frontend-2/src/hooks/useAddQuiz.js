import { useState } from "react";
import database from "../firebase";

export const useAddQuiz = (props) => {
  const currentDate = new Date();
  const timestamp = currentDate.getTime(); // Milliseconds

  var quizRef = database.ref("quiz");
  var newQuizRef = quizRef.push();
  newQuizRef.set(
    {
      number_of_exercises: props.numberOfExercises,
      grade: props.grade,
      subject: props.subject,
      tema_id: props.temaId,
      date_added: timestamp.toString(),
      id: newQuizRef.key,
    },
    (error) => {
      if (error) {
        console.log("error");
      } else {
        // setIsQuizCreated(true);
      }
    }
  );
};

export default useAddQuiz;
