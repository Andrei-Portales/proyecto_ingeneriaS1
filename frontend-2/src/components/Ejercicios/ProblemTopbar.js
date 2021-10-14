import "./problem-topbar.scss";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import useKeyboardShortcut from "use-keyboard-shortcut";
import { useAudio } from "react-use";

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
              <VolumeUpIcon
                className="uilVolume"
                onClick={() => assessmentAudio()}
              />
            ) : (
              <VolumeUpIcon
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
