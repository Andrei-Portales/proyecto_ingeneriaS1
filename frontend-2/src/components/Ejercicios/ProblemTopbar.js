import "./problem-topbar.scss";
import useKeyboardShortcut from "use-keyboard-shortcut";
import { useAudio } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const ProblemTopbar = ({ audioSource }) => {
  const [audio, state, controls] = useAudio({
    src: audioSource,
    autoPlay: false,
  });
  let isAudioEnabled = localStorage.getItem("enabledAudio") === "true";

  // Atajo de teclado para reproducir audio
  useKeyboardShortcut(["F"], () => assessmentAudio(), {
    overrideSystem: false,
  });

  const assessmentAudio = () => {
    if (isAudioEnabled) {
      controls.play();
    }
  };

  return (
    <div className="problemTopbar">
      {isAudioEnabled
        ? [
            JSON.stringify(state.time, null, 2) === 0 ||
            JSON.stringify(state.time, null, 2) ===
              JSON.stringify(state.duration, null, 2) ||
            JSON.stringify(state.paused, null, 2) === "true" ? (
              <FontAwesomeIcon
                icon={faVolumeUp}
                className="uilVolume"
                onClick={() => assessmentAudio()}
              />
            ) : (
              <FontAwesomeIcon
                icon={faVolumeUp}
                className="uilVolumePlaying"
                onClick={() => assessmentAudio()}
              />
            ),
          ]
        : null}

      {audio}
    </div>
  );
};

export default ProblemTopbar;
