import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar';
import styles from './Add.module.scss';

const Add = () => {
  const editor = useEditor({
    extensions: [StarterKit],
  });
  
  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <button onClick={() => console.log(editor.getHTML())}>
        Obtener texto
      </button>
    </div>
  );
};

export default Add;
