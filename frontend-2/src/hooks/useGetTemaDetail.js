import { useEffect, useState } from "react";
import database from "../firebase";

const useGetTemaDetail = (id) => {
  const [tema, setTema] = useState([]);

  useEffect(() => {
    // Retreive from firebase
    database.ref("temas").on("value", (snapshot) => {
      let list = [];
      snapshot.forEach((snap) => {
        if (snap.val().id === id) {
          list.push(snap.val());
        }
      });
      setTema(list);
    });
  }, [id]);

  return tema;
};
export default useGetTemaDetail;
