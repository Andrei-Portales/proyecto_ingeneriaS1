import { useEffect, useState } from "react";
import { useParams } from "react-router";
import database from "../firebase";

export const useGetTema = () => {
  const params = useParams();
  const [tema, setTema] = useState([]);

  useEffect(() => {
    database.ref("temas").on("value", (snapshot) => {
      let list = [];
      snapshot.forEach((snap) => {
        if (snap.val().tema_id === params.id) {
          list.push(snap.val());
        }
      });
      setTema(list);
    });
  }, [params.id]);

  return { tema };
};
