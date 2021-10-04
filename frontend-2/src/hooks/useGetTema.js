import { useEffect, useState } from "react";
import { useParams } from "react-router";
import database from "../firebase";

export const useGetTema = () => {
  const params = useParams();
  const [tema, setTema] = useState([]);

  // Obtener los detalles de los ejercicios del tema
  useEffect(() => {
    database.ref("quiz").on("value", (snapshot) => {
      snapshot.forEach((snap) => {
        if (snap.val().tema_id === params.id) {
          localStorage.setItem("quizId", snap.val().id);
          localStorage.setItem(
            "numberOfExercises",
            snap.val().number_of_exercises
          );
          return;
        } else {
          // localStorage.setItem("quizId", "-1");
          // localStorage.setItem("numberOfExercises", "0");
        }
      });
    });
  }, [params.id]);

  // Obetener los parametros de un tema
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
