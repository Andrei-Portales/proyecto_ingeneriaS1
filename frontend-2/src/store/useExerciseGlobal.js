import { useState } from "react";

const useExerciseGlobal = () => {
  const [selectedAnswer, setSelectedAnswer] = useState({
    value: 0,
    list: [],
  });
  const [isCorrectAnswer, setIsCorrectAnswer] = useState({
    value: false,
    list: [],
  });
  const [isWrongAnswer, setIsWrongAnswer] = useState({
    value: false,
    list: [],
  });
  const [showSettings, setShowSettings] = useState({ value: false, list: [] });

  const [id, setId] = useState({ value: "", list: [] });
  const [index, setIndex] = useState({ value: 0, list: [] });

  const actions = (action) => {
    const { type, payload } = action;
    switch (type) {
      case "setSelectedAnswer":
        return setSelectedAnswer(payload);
      case "setIsCorrectAnswer":
        return setIsCorrectAnswer(payload);
      case "setIsWrongAnswer":
        return setIsWrongAnswer(payload);
      case "setId":
        return setId(payload);
      case "setIndex":
        return setIndex(payload);
      case "setShowSettings":
        return setShowSettings(payload);
      default:
        return isCorrectAnswer;
    }
  };
  return {
    selectedAnswer,
    isCorrectAnswer,
    isWrongAnswer,
    id,
    index,
    showSettings,
    actions,
  };
};

export default useExerciseGlobal;
