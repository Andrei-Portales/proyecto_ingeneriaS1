import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import database from "../firebase";
import Context from "../store/context";

export const useGetTema = () => {
  const params = useParams();
  const [tema, setTema] = useState([]);
  const { isCorrectAnswer, actions } = useContext(Context);

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
    actions({
      type: "setIsCorrectAnswer",
      payload: { ...isCorrectAnswer, value: false },
    });
  }, [params.id, actions, isCorrectAnswer]);

  return { tema };
};
