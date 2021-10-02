import React, { useRef, useContext } from "react";
import "./editor.css";
import Context from "../../store/context";
import Editor from "../../pages/Dashboard/Temas/Editor/Editor";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import database from "../../firebase";

const Editors = ({ temaId }) => {
  const editorRef = useRef();
  const { showEditor, actions } = useContext(Context);

  const handleClose = () => {
    actions({
      type: "setShowEditor",
      payload: { ...showEditor, value: false },
    });
  };

  const updateBody = async () => {
    const editor = editorRef.current.save();
    database.ref(`temas/${temaId}`).update({ body: editor });
  };

  return (
    <Modal show={showEditor.value} animation={false}>
      <div>
        <Editor ref={editorRef} />
      </div>
      <div className="modal-footer">
        <Button onClick={updateBody}>Guardar</Button>
        <button onClick={() => handleClose()} className="closeButton">
          Cerrar
        </button>
      </div>
    </Modal>
  );
};
export default Editors;
