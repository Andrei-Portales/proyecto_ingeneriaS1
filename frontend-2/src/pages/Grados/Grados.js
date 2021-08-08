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
          <div>
            <img
              src={cuarto}
              alt="cuarto"
              onClick={selectGradeHandler.bind(null, 'cuarto')}
            />
            <h3>Cuarto</h3>
          </div>
          <div>
            <img
              src={quinto}
              alt="quitno"
              onClick={selectGradeHandler.bind(null, 'quinto')}
            />
            <h3>Quinto</h3>
          </div>
          <div>
            <img
              src={sexto}
              alt="sexto"
              onClick={selectGradeHandler.bind(null, 'sexto')}
            />
            <h3>Sexto</h3>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Grados;
