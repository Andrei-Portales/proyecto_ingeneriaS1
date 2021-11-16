import { useEffect, useState, useContext } from "react";

import database from "../firebase";

export const useGetPin = () => {
  const [pin, setPin] = useState("");

  // Obtener los detalles de los ejercicios del tema
  useEffect(() => {
    database.ref("pin").on("value", (snapshot) => {
      snapshot.forEach((snap) => {
        setPin(snap.val().pin);
      });
    });
  }, [pin]);

  return { pin };
};
