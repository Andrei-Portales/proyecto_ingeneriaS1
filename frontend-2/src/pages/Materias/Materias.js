import {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import TemaItem from '../../components/TemaItem/TemaItem';
import {temas as linkTema} from '../../util/links';

import styles from './Materias.module.scss';

const Materias = () => {
  const isLightTheme = useSelector((state) => state.theme.theme) === 'LIGHT';
  const params = useParams();
  const history = useHistory();
  const [temas, setTemas] = useState([]);


  const materiaClasses = `${styles.materia} ${!isLightTheme && styles['materia-dark']
    }`;

  const onClickTemaHandler = (id) => {
    history.push(`/grados/${params.grado}/${params.materia}/${id}`);
  };

  const fetchTemas = async () => {
      try{
        const response = await fetch(linkTema, {
          method: 'POST',
          body: JSON.stringify({
            subject: params.materia,
            grade: params.grado
          }),
          headers: {
            'Content-Type': 'application/json',
          }
        });

        const data = await response.json();

        if (data.result){
          const tempTemas = data.temas.map((item, index)=>({no: index + 1, ...item}));
          setTemas(tempTemas);
        }
      }catch(e){
        console.log(e);
      }
  };

  useEffect(()=>{
    fetchTemas();
  }, []);

  return (
    <div className={materiaClasses}>
      <h1>{params.materia.toUpperCase()}</h1>
      <div className={styles.materiasList}>
        {temas.map((item) => (
          <div onClick={onClickTemaHandler.bind(null, item.id)} key={item.id}>
            <TemaItem leading={item.no} title={item.title} />
          </div>
        ))}
        {temas.length === 0 && <p>No hay temas disponibles...</p>}
      </div>
    </div>
  );
};

export default Materias;
