import css from "./NotePreview.module.css";

type Note = {
  title: string;
  content: string;
};

const NotePreview = ({ note }: { note: Note }) => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{note.title}</h2>
      <p className={css.text}>{note.content}</p>
    </div>
  );
};

export default NotePreview;
