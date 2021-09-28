import styles from "./materias-progress.module.scss";

const MateriasProgress = (props) => {
  let percentage = props.progressPercentage;
  return (
    <div className={styles.progress}>
      <div className={styles.progressbar}>
        <div
          className={styles.currentProgress}
          style={{ width: `${percentage}%` }}
        ></div>
        {percentage + "%"}
      </div>
    </div>
  );
};
export default MateriasProgress;
