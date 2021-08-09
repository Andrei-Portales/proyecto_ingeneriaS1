import { useReducer, useImperativeHandle, forwardRef } from 'react';
import styles from './AddForm.module.scss';

const initialState = {
  title: '',
  grade: 'cuarto',
  materia: 'matematicas',
  url: '',
};

const reducer = (state, action) => {
  if (action.type === 'TITLE') {
    return { ...state, title: action.value };
  } else if (action.type === 'GRADE') {
    return { ...state, grade: action.value };
  } else if (action.type === 'MATERIA') {
    return { ...state, materia: action.value };
  } else if (action.type === 'URL') {
    return { ...state, url: action.value };
  } else if (action.type === 'RESET') {
    return initialState;
  }

  return initialState;
};

const AddForm = forwardRef((props, ref) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useImperativeHandle(ref, () => ({
    state: { ...state },
    reset() {
      dispatch({ type: 'RESET' });
    },
  }));

  const titleChangeHandler = (event) => {
    dispatch({ type: 'TITLE', value: event.target.value });
  };

  const gradeChangeHandler = (event) => {
    dispatch({ type: 'GRADE', value: event.target.value });
  };

  const materiaChangeHandler = (event) => {
    dispatch({ type: 'MATERIA', value: event.target.value });
  };

  const urlChangeHandler = (event) => {
    dispatch({ type: 'URL', value: event.target.value });
  };

  return (
    <form className={styles.form}>
      <div className={styles.input}>
        <label>Titulo:</label>
        <input onChange={titleChangeHandler} value={state.title} />
      </div>

      <div className={styles.dropDown}>
        <label>Grado:</label>
        <select onChange={gradeChangeHandler} value={state.grade}>
          <option value="cuarto">Cuarto</option>
          <option value="quinto">Quinto</option>
          <option value="sexto">Sexto</option>
        </select>
      </div>

      <div className={styles.dropDown}>
        <label>Materia:</label>
        <select onChange={materiaChangeHandler} value={state.materia}>
          <option value="matematicas">Matematicas</option>
          <option value="ciencias">Ciencias</option>
          <option value="idioma">Idioma</option>
        </select>
      </div>

      <div className={styles.input}>
        <label>Url de video:</label>
        <input onChange={urlChangeHandler} value={state.url} />
      </div>
    </form>
  );
});

export default AddForm;
