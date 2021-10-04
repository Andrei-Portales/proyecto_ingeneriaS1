import { useHistory } from 'react-router';
import styles from './Grados.module.scss';
import cuarto from '../../assets/4togrado.png';
import quinto from '../../assets/5togrado.png';
import sexto from '../../assets/6togrado.png';
import fondo from '../../assets/background.jpg';

const Grados = () => {
  const history = useHistory();

  const selectGradeHandler = (grade) => {
    history.push(`/grados/${grade}`);
  };  

  return (
    <body  background={fondo}>
      <div className={styles.gradosPage}>
        <h1 className={styles.title}>Grados</h1>
        <div className={styles.grados}>
          <div className={styles.div_grados}>
            <img
              src={cuarto}
              alt="cuarto"
              onClick={selectGradeHandler.bind(null, 'cuarto')}
            />
            <h2 className={styles.text_grados}>Cuarto</h2>
          </div>
          <div className={styles.div_grados}>
            <img 
              src={quinto}
              alt="quinto"
              onClick={selectGradeHandler.bind(null, 'quinto')}
            />
            <h2 className={styles.text_grados}>Quinto</h2>
          </div>
          <div className={styles.div_grados}>
            <img 
              src={sexto}
              alt="sexto"
              onClick={selectGradeHandler.bind(null, 'sexto')}
            />
            <h2 className={styles.text_grados}>Sexto</h2>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Grados;
