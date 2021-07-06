import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import TemaItem from '../../components/TemaItem/TemaItem';

import styles from './Materia.module.scss';
import { temas } from '../../util/grados-materias';

const Materia = () => {
  const isLightTheme = useSelector((state) => state.theme.theme) === 'LIGHT';
  const params = useParams();

  const grado = temas[params.grado];
  const materia = grado[params.materia];

  const temasItems = [];

  for (let i = 0; i < materia.temas.length; i++) {
    temasItems.push({
      no: i + 1,
      title: materia.temas[i],
    });
  }

  const materiaClasses = `${styles.materia} ${
    !isLightTheme && styles['materia-dark']
  }`;

  return (
    <div className={materiaClasses}>
      <h1>{materia.title}</h1>
      <div className={styles.materiasList}>
        {temasItems.map((item) => (
          <TemaItem key={item.no} leading={item.no} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Materia;
