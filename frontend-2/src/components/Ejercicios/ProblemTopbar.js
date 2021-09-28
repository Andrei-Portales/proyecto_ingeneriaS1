import "./problem-topbar.scss";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

const ProblemTopbar = ({ audioSource }) => {
  let isAudioEnabled = localStorage.getItem("enabledAudio") === "true";
  let audio = new Audio(audioSource);

  const assessmentAudio = () => {
    audio.play();
  };
  return (
    <div className="problemTopbar">
      {isAudioEnabled ? (
        <VolumeUpIcon className="uilVolume" onClick={() => assessmentAudio()} />
      ) : null}
    </div>
  );
};

export default ProblemTopbar;
