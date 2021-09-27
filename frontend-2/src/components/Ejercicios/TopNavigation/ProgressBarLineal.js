import styles from "./progress-bar-lineal.module.scss";

const ProgressBarLineal = ({ steps, index }) => {
  let percentage = Math.round((index / steps) * 100);
  console.log(steps);
  console.log(percentage);
  return (
    <div className={styles.progress}>
      <div className={styles.progressbar}>
        <div
          className={styles.currentProgress}
          style={{ width: `${percentage}%` }}
        ></div>
        {/* {percentage + "%"} */}
      </div>
    </div>
  );
};
export default ProgressBarLineal;
