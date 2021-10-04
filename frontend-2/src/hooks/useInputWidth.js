import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";

export const useInputWidth = (numberOfAnswers) => {
  const { width } = useWindowSize();

  const [inputWidth, setInputWidth] = useState("");

  useEffect(() => {
    if (numberOfAnswers === 2 && width >= 962) {
      setInputWidth("20%");
    }
    if (numberOfAnswers === 2 && width < 962) {
      setInputWidth("100%");
    }
    if (numberOfAnswers === 3 && width >= 962) {
      setInputWidth("20%");
    }
    if (numberOfAnswers === 3 && width < 962) {
      setInputWidth("100%");
    }
    if (numberOfAnswers === 4 && width >= 962) {
      setInputWidth("20%");
    }
    if (numberOfAnswers === 4 && width < 962) {
      setInputWidth("48%");
    }
  }, [numberOfAnswers, width]);

  return { inputWidth };
};
