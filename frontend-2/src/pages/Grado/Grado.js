import { useParams, useHistory } from 'react-router-dom';
import { materias } from '../../util/grados-materias';
import styles from './Grado.module.scss';
import { useSelector } from 'react-redux';

const Grado = (props) => {
  const history = useHistory();
  const params = useParams();
  const gradoInfo = materias[props.grade ? props.grade : params.grado];

  if (!gradoInfo) {
    history.replace('/grados');
  }

  const isLightTheme = useSelector((state) => state.theme.theme) === "LIGHT";

  const onMateriaClickHandler = (id) => {
    history.push(`/grados/${params.grado}/${id}`);
  };

  const fondo = `${styles.bodyPart} ${
        !isLightTheme && styles["bodyPart-dark"]
    }`;

  return (
    <body className={fondo}>
      <div className={styles.gradoPage}>
        <h1 className={styles.title}>{gradoInfo.title}</h1>
        <div className={styles.materias}>
          {gradoInfo.materias.map((item) => {
            return (
              <div className={styles.materiaPart}
                key={item.id}
                onClick={onMateriaClickHandler.bind(null, item.id)}
              >
                <img src={item.image} alt="" />
                <h2>{item.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </body>
  );
};

export default Grado;
