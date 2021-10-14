import { useEffect, useState } from "react";
import { useParams } from "react-router";
import firebase from "../firebase";

export const useGetMaterias = () => {
  const params = useParams();
  const [temas, setTemas] = useState([]);

  useEffect(() => {
    firebase.ref("temas").on("value", (snapshot) => {
      let list = [];
      snapshot.forEach((snap) => {
        console.log(snap.val());
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
