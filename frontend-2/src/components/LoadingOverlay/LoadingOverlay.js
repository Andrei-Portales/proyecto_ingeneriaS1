import reactDom from 'react-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import styles from './LoadingOverlay.module.scss';

const LoadingOverlay = () => {
   const content =  <div className={styles.background}>
        <div className={styles.container}>
            <LoadingSpinner />
            <br />
            Cargando...
        </div>
    </div>;

    return reactDom.createPortal(content, document.getElementById('portals'));
};

export default LoadingOverlay;