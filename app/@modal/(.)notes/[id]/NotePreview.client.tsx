"use client";

import { useRouter } from "next/navigation";
import css from "./NotePreview.module.css";
import type { Note } from "@/types/note";

export default function NotePreviewClient({ note }: { note: Note }) {
  const router = useRouter();

  return (
    <div className={css.container}>
      <button className={css.backBtn} onClick={() => router.back()}>
        ← Back
      </button>

      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
          {note.tag && <span className={css.tag}>{note.tag}</span>}
        </div>

        <p className={css.content}>{note.content}</p>

        <p className={css.date}>
          {new Date(note.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
