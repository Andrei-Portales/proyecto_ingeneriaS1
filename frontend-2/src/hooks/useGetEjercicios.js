import { useEffect, useState } from "react";
import database from "../firebase";

export const useGetEjercicios = () => {
  const [ejercicios, setEjercicios] = useState([]);

  useEffect(() => {
    // Retreive from firebase
    database
      .ref("quiz")
      .orderByChild("tema_id")
      .on("value", (snapshot) => {
        let list = [];
        snapshot.forEach((snap) => {
          list.push(snap.val());
        });
        setEjercicios(list);
      });
  }, []);

  return { ejercicios };
};
