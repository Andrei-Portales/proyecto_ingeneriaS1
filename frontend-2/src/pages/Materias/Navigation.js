import styles from "./navigation.module.scss";

import { UilCheck } from "@iconscout/react-unicons";
import { UilAngleLeft } from "@iconscout/react-unicons";
import { UilAngleRight } from "@iconscout/react-unicons";
import { UilClipboard } from "@iconscout/react-unicons";

const Navigation = () => {
  return (
    <div className={styles.materiasListNavigation}>
      <div className={styles.navigationsButton}>
        <div className={styles.col3}>
          <button className={styles.buttonLeft}>
            <div className={styles.buttonContent}>
              <UilAngleLeft className={styles.uilAngle} />
            </div>
          </button>
        </div>
        <div className={styles.col6}>
          <button className={styles.buttonGoExercise}>
            <div className={styles.buttonContent}>
              <UilClipboard className={styles.uilClipboard}></UilClipboard>
            </div>
          </button>
        </div>
        <div className={styles.col3}>
          <button className={styles.buttonRight}>
            <div className={styles.buttonContent}>
              <UilAngleRight className={styles.uilAngle} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
