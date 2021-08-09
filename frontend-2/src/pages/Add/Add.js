import { useRef, useState } from 'react';
import Editor from '../../components/Editor/Editor';
import AddForm from '../../components/AddForm/AddForm';
import styles from './Add.module.scss';
import { Fragment } from 'react';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';

const Add = () => {
  const editorRef = useRef();
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const saveForm = async () => {
    const { title, url, materia, grade } = formRef.current.state;
    const editor = editorRef.current.save();

    if (title.trim() === '' || url.trim() === '') {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:2000/addTema', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: materia,
          grade: grade,
          title: title,
          body: editor,
          video_url: url,
        }),
      });

      const data = await response.json();

      if (data.result) {
        formRef.current.reset();
      }
    } catch (e) {

    }
    setIsLoading(false);
  };

  return (
    <Fragment>
      {isLoading && <LoadingOverlay />}
      <div className={styles.add}>
        <AddForm ref={formRef} />
        <Editor ref={editorRef} />
        <div className={styles.actions}>
          <button onClick={() => {}} className={styles.submitButton}>
            Resetear
          </button>
          <button onClick={saveForm} className={styles.submitButton}>
            Guardar
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Add;
