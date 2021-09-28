import styles from './LoadingSpinner.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={styles.centered}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
};

export default LoadingSpinner;
