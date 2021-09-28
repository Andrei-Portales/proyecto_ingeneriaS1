import { useEffect, useState } from "react";
import database from "../firebase";

export const useGetQuiz = () => {
  const [quizList, setQuizList] = useState([]);

  useEffect(() => {
    // Retreive from firebase
    database.ref("quiz").on("value", (snapshot) => {
      let list = [];
      snapshot.forEach((snap) => {
        list.push(snap.val());
      });
      setQuizList(list);
    });
  }, []);

  return { quizList };
};
