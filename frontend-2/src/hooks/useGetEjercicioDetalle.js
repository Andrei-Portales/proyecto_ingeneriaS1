import { useEffect, useState } from "react";
import database from "../firebase";

const useGetQuizDetail = (id) => {
  const [ejercicio, setEjercicio] = useState([]);

  useEffect(() => {
    // Retreive from firebase
    database.ref("quiz").on("value", (snapshot) => {
      let list = [];
      snapshot.forEach((snap) => {
        if (snap.val().id === id) {
          list.push(snap.val());
        }
      });
      setEjercicio(list);
    });
  }, [id]);

  return ejercicio;
};
export default useGetQuizDetail;
