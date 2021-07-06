import { useSelector } from 'react-redux';
import styles from './TemaItem.module.scss';

const TemaItem = (props) => {
  const isLightTheme = useSelector((state) => state.theme.theme) === 'LIGHT';

  const itemClasses = `${styles.temaItem} ${
    isLightTheme ? '' : styles['temaItem-dark']
  }`;
  return (
    <div className={itemClasses}>
      <div className={styles.leading}>
        <p>{props.leading}</p>
      </div>
      <div className={styles.main}>{props.title}</div>
    </div>
  );
};

export default TemaItem;
