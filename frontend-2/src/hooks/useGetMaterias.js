import { useEffect, useState } from "react";
import { useParams } from "react-router";
import database from "../firebase";

export const useGetMaterias = () => {
  const params = useParams();
  const [temas, setTemas] = useState([]);

  useEffect(() => {
    database.ref("temas").on("value", (snapshot) => {
      let list = [];
      snapshot.forEach((snap) => {
        if (
          snap.val().grade === params.grado &&
          snap.val().subject === params.materia
        ) {
          list.push(snap.val());
        }
      });
      setTemas(list);
    });
  }, [params.grado, params.materia]);

  return { temas };
};
