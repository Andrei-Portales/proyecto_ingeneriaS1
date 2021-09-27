import { useEffect, useState } from "react";
import database from "../firebase";

const useGetQuizDetail = (id) => {
  const [quizList, setQuizList] = useState([]);

  useEffect(() => {
    // Retreive from firebase
    database.ref("quiz").on("value", (snapshot) => {
      let list = [];
      snapshot.forEach((snap) => {
        if (snap.val().id === id) {
          list.push(snap.val());
        }
      });
      setQuizList(list);
    });
  }, [id]);

  return quizList;
};
export default useGetQuizDetail;
