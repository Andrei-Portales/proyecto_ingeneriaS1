import { useParams, useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import TemaItem from '../../components/TemaItem/TemaItem';

import styles from './Materias.module.scss';
import { temas } from '../../util/grados-materias';

const Materias = () => {
  const isLightTheme = useSelector((state) => state.theme.theme) === 'LIGHT';
  const params = useParams();
  const history = useHistory();
  const grado = temas[params.grado];
  const materia = grado[params.materia];

  const temasItems = [];

  for (let i = 0; i < materia.temas.length; i++) {
    temasItems.push({
      no: i + 1,
      title: materia.temas[i],
    });
  }

  const materiaClasses = `${styles.materia} ${!isLightTheme && styles['materia-dark']
    }`;

  const onClickTemaHandler = (id) => {
    history.push(`/grados/${params.grado}/${params.materia}/${id}`);
  };

  return (
    <div className={materiaClasses}>
      <h1>{materia.title}</h1>
      <div className={styles.materiasList}>
        {temasItems.map((item) => (
          <div onClick={onClickTemaHandler.bind(null, item.no)} key={item.no}>
            <TemaItem leading={item.no} title={item.title} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Materias;
