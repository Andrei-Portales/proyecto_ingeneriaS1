import { useSelector } from "react-redux";
import styles from "./TemaItemSuggested.module.scss";
import { UilPlay } from "@iconscout/react-unicons";
import RocketImg from "../../assets/rocket.png";

const TemaItemSuggested = (props) => {
  const isLightTheme = useSelector((state) => state.theme.theme) === "LIGHT";

  const itemClasses = `${
    props.leading == props.playingTema
      ? styles.temaPlaying
      : styles.temaItemSuggested
  } ${isLightTheme ? "" : styles["temaItem-dark"]}`;

  console.log(props.leading);
  console.log(props.playingTema);

  return (
    <div className={itemClasses}>
      {props.leading == props.playingTema ? (
        <UilPlay size="16"></UilPlay>
      ) : (
        <div>
          <UilPlay size="16" className={styles.playIconHidden}></UilPlay>
        </div>
      )}
      <div className={styles.leading}>
        <img src={RocketImg} width="40" height="40" />
      </div>
      <div className={styles.main}>{props.title}</div>
    </div>
  );
};

export default TemaItemSuggested;
