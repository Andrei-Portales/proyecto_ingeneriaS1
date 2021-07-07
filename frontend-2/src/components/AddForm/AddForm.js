import styles from './AddForm.module.scss';

const AddForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.input}>
        <label>Titulo:</label>
        <input />
      </div>

      <div className={styles.dropDown}>
        <label>Grado:</label>
        <select>
          <option value="cuarto">Cuarto</option>
          <option value="quinto">Quinto</option>
          <option value="sexto">Sexto</option>
        </select>
      </div>

      <div className={styles.dropDown}>
        <label>Materia:</label>
        <select>
          <option value="matematicas">Matematicas</option>
          <option value="ciencias">Ciencias</option>
          <option value="idioma">Idioma</option>
        </select>
      </div>

      <div className={styles.input}>
        <label>Url de video:</label>
        <input />
      </div>
    </form>
  );
};

export default AddForm;
