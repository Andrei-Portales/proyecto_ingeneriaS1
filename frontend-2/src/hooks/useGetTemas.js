import { useEffect, useState } from "react";
import database from "../firebase";

export const useGetTemas = () => {
  const [temas, setTemas] = useState([]);

  useEffect(() => {
    // Retreive from firebase
    database
      .ref("temas")
      .orderByChild("tema_id")
      .on("value", (snapshot) => {
        let list = [];
        snapshot.forEach((snap) => {
          list.push(snap.val());
        });
        setTemas(list);
      });
  }, []);

  return { temas };
};
