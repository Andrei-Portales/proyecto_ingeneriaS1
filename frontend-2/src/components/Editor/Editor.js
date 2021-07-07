import { forwardRef, useImperativeHandle } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './MenuBar';
import styles from './Editor.module.scss';

const Editor = forwardRef((props, ref) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: props.initialContent,
  });

  useImperativeHandle(ref, () => ({
    save() {
      return editor.getHTML();
    },
  }));

  return (
    <div className={styles.editor}>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className={styles.editorPanel} />
    </div>
  );
});

export default Editor;
