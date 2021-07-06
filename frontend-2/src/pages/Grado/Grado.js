import { useParams, useHistory } from 'react-router-dom';
import { materias } from '../../util/grados-materias';
import styles from './Grado.module.scss';

const Grado = () => {
  const history = useHistory();
  const params = useParams();
  const gradoInfo = materias[params.grado];

  if (!gradoInfo) {
    history.replace('/grados');
  }

  const onMateriaClickHandler = (id) => {
    history.push(`/grados/${params.grado}/${id}`);
  };

  return (
    <div className={styles.gradoPage}>
      <h1 className={styles.title}>{gradoInfo.title}</h1>
      <div className={styles.materias}>
        {gradoInfo.materias.map((item) => {
          return (
            <div
              key={item.id}
              onClick={onMateriaClickHandler.bind(null, item.id)}
            >
              <img src={item.image} alt="cuarto" />
              <h3>{item.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grado;
