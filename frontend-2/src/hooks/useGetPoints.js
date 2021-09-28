import React, { useState, useEffect } from "react";

export const useGetPoints = () => {
  const [points, setPoints] = useState("");
  useEffect(() => {
    setPoints(window.localStorage.getItem("userPoints"));
  }, []);

  return points;
};
