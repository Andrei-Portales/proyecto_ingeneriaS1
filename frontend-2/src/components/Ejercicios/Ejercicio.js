/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import "./ejercicio.scss";
import Context from "../../store/context";
import { useGetExercise } from "../../hooks/useGetExercise";
import Confetti from "./TopNavigation/Confettii";
import QuestionsPanel from "./QuestionsPanel";
import AnswersPanel from "./AnswersPanel";
import TopNavigation from "./TopNavigation/TopNavigation";
import BottomNavigation from "./BottomNavigation/BottomNavigation";
import ProblemTopbar from "./ProblemTopbar";
import useKeyboardShortcut from "use-keyboard-shortcut";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";

// const appId = "f16ef849-188b-4e08-9b63-e2b321edaa41";
// const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
// SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const Ejercicio = () => {
  const { exercise } = useGetExercise();
  const { isCorrectAnswer } = useContext(Context);
  let isAudioEnabled = localStorage.getItem("enabledAudio") === "true";

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });

  const answersList = [];

  useKeyboardShortcut(["A"], () => handleAudio(), {
    overrideSystem: false,
  });

  answersList.push(exercise.answer_one);
  answersList.push(exercise.answer_two);
  answersList.push(exercise.answer_three);
  answersList.push(exercise.answer_four);

  const theme = useSelector((state) => state.theme.theme);

  const isLightMode = theme !== "LIGHT";

  const exerciceWrapper = `${"exerciceWrapper"} ${
    isLightMode ? "exerciceWrapperDark" : ""
  }`;

  const handleAudio = () => {
    if (isAudioEnabled) {
      localStorage.setItem("enabledAudio", false);
      return;
    }
    if (!isAudioEnabled) {
      localStorage.setItem("enabledAudio", true);
      return;
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className={exerciceWrapper}>
      {isCorrectAnswer.value ? <Confetti active={true} /> : ""}

      <TopNavigation index={exercise.order} />
      <div className="problemBody">
        <div className="problemContentWrapper">
          <ProblemTopbar audioSource={exercise.audio_url} />

          {/* <div>
                  <p>Microphone: {listening ? "on" : "off"}</p>
                  <button
                    onTouchStart={startListening}
                    onMouseDown={startListening}
                    onTouchEnd={SpeechRecognition.stopListening}
                    onMouseUp={SpeechRecognition.stopListening}
                  >
                    Hold to talk
                  </button>
                  <p>{transcript}</p>
                </div> */}

          <div className="problemContent">
            <QuestionsPanel
              instructions={exercise.question_title}
              issue={exercise.question_subtitle}
              answerUrl={exercise.answer_url}
              version={exercise.version}
              id={exercise.id}
            />
            <AnswersPanel
              answersList={answersList}
              version={exercise.version}
            />
          </div>
        </div>
      </div>
      <BottomNavigation correctAnswer={exercise.correct_answer} />
    </div>
  );
};

export default Ejercicio;
