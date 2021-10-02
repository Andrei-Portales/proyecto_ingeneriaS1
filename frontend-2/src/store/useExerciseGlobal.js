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
  const [showEditor, setShowEditor] = useState({ value: false, list: [] });

  const [id, setId] = useState({ value: "", list: [] });
  const [index, setIndex] = useState({ value: 0, list: [] });
  const [activeIndex, setActiveIndex] = useState({ value: -1 });

  ////// GLOBAL VARIABLES FOR TEMAS
  const [isItemVisible, setIsItemVisible] = useState({ value: false });

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
      case "setActiveIndex":
        return setActiveIndex(payload);
      case "setShowSettings":
        return setShowSettings(payload);
      case "setShowEditor":
        return setShowEditor(payload);
      case "setIsItemVisible":
        return setIsItemVisible(payload);
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
    activeIndex,
    showSettings,
    showEditor,
    isItemVisible,
    actions,
  };
};

export default useExerciseGlobal;
