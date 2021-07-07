import { useRef } from 'react';
import Editor from '../../components/Editor/Editor';
import AddForm from '../../components/AddForm/AddForm';
import styles from './Add.module.scss';

const Add = () => {
  const ref = useRef();

  return (
    <div className={styles.add}>
      <AddForm />
      <Editor ref={ref} />
      <div className={styles.actions}>
        <button onClick={() => {}} className={styles.submitButton}>
          Resetear
        </button>
        <button
          onClick={() => console.log(ref.current.save())}
          className={styles.submitButton}
        >
          Guardar
        </button>
      </div>
    </div>
  );
};

export default Add;
