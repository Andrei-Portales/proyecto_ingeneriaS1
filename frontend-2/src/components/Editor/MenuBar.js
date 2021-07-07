import styles from './MenuBar.module.scss';

import codingIcon from '../../assets/coding.svg';
import clearIcon from '../../assets/delete.svg';
import cleanIcon from '../../assets/clean.svg';
import paragraphIcon from '../../assets/paragraph.svg';
import bulletListIcon from '../../assets/list.svg';
import numberListIcon from '../../assets/number.svg';
import computerIcon from '../../assets/computer.svg';
import tabIcon from '../../assets/tab.svg';
import lineBreakIcon from '../../assets/line-break-symbol.svg';
import divideIcon from '../../assets/divide.svg';
import undoIcon from '../../assets/undo.svg';
import redoIcon from '../../assets/redo.svg';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className={styles.toolbar}>
      <div className={styles.button} onClick={editor.chain().toggleBold().run}>
        <b>B</b>
      </div>

      <div
        className={styles.button}
        onClick={editor.chain().toggleItalic().run}
      >
        <em>i</em>
      </div>

      <div
        className={styles.button}
        onClick={editor.chain().toggleStrike().run}
      >
        <strike>U</strike>
      </div>

      <div className={styles.button} onClick={editor.chain().toggleCode().run}>
        <img src={codingIcon} alt="" className={styles.icon} />
      </div>

      <div
        className={styles.button}
        onClick={editor.chain().unsetAllMarks().run}
      >
        <img src={clearIcon} alt="" className={styles.icon} />
      </div>

      <div className={styles.button} onClick={editor.chain().clearNodes().run}>
        <img src={cleanIcon} alt="" className={styles.icon} />
      </div>

      <div
        className={styles.button}
        onClick={editor.chain().setParagraph().run}
      >
        <img src={paragraphIcon} alt="" className={styles.icon} />
      </div>

      <div
        className={styles.button}
        onClick={editor.chain().toggleHeading({ level: 2 }).run}
      >
        <b>T1</b>
      </div>

      <div
        className={styles.button}
        onClick={editor.chain().toggleHeading({ level: 3 }).run}
      >
        <b>T2</b>
      </div>

      <div
        className={styles.button}
        onClick={editor.chain().toggleHeading({ level: 4 }).run}
      >
        <b>T3</b>
      </div>

      <div
        className={styles.button}
        onClick={editor.chain().toggleHeading({ level: 5 }).run}
      >
        <b>T4</b>
      </div>

      <div
        className={styles.button}
        onClick={editor.chain().toggleHeading({ level: 6 }).run}
      >
        <b>T5</b>
      </div>

      <div
        className={styles.button}
        onClick={editor.chain().toggleBulletList().run}
      >
        <img src={bulletListIcon} alt="" className={styles.icon} />
      </div>

      <div
        className={styles.button}
        onClick={editor.chain().toggleOrderedList().run}
      >
        <img src={numberListIcon} alt="" className={styles.icon} />
      </div>

      <div
        className={styles.button}
        onClick={editor.chain().toggleCodeBlock().run}
      >
        <img src={computerIcon} alt="" className={styles.icon} />
      </div>

      <div
        className={styles.button}
        onClick={editor.chain().toggleBlockquote().run}
      >
        <img src={tabIcon} alt="" className={styles.icon} />
      </div>

      <div
        className={styles.button}
        onClick={editor.chain().setHardBreak().run}
      >
        <img src={lineBreakIcon} alt="" className={styles.icon} />
      </div>

      <div
        className={styles.button}
        onClick={editor.chain().setHorizontalRule().run}
      >
        <img src={divideIcon} alt="" className={styles.icon} />
      </div>

      <div className={styles.button} onClick={editor.chain().undo().run}>
        <img src={undoIcon} alt="" className={styles.icon} />
      </div>

      <div className={styles.button} onClick={editor.chain().redo().run}>
        <img src={redoIcon} alt="" className={styles.icon} />
      </div>
    </div>
  );
};

export default MenuBar;
