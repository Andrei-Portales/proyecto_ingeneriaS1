import styles from './LoadingSpinnerSized.module.scss';

const LoadingSpinnerSized = ({height, width, border}) => {

  return (
    <div className={styles.centered}>
      <div className={styles.loadingSpinner} style={{height, width, border:`${border} solid`, borderColor:'black transparent black transparent'}}></div>
    </div>
  );
};

export default LoadingSpinnerSized;
