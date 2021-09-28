import { useRef, useState } from "react";
import database from "../../firebase";
import Editor from "../../components/Editor/Editor";
import AddForm from "../../components/AddForm/AddForm";
import styles from "./Add.module.scss";
import { Fragment } from "react";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import { toast } from "react-toastify";

const Add = () => {
  const editorRef = useRef();
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const saveForm = async () => {
    const { id, title, url, materia, grade } = formRef.current.state;
    const editor = editorRef.current.save();

    if (title.trim() === "" || url.trim() === "") {
      return;
    }

    setIsLoading(true);

    var temasRef = database.ref("temas");
    var newTemaRef = temasRef.push();
    newTemaRef.set(
      {
        id: newTemaRef.key,
        tema_id: id,
        subject: materia,
        grade: grade,
        title: title,
        body: editor,
        video_url: url,
      },
      (error) => {
        if (error) {
          toast.error(error);
        } else {
          formRef.current.reset();
        }
      }
    );

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
