import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function FilteredNotesPage({ params }: Props) {
  const { slug } = await params;
  const currentTag = slug[0];

  const searchTag = currentTag === "all" ? "" : currentTag;

  const { notes } = await fetchNotes({ search: searchTag });

  return (
    <section>
      <h2 style={{ marginBottom: "20px" }}>
        Category: {currentTag === "all" ? "All Notes" : currentTag}
      </h2>

      {notes.length > 0 ? (
        <NoteList notes={notes} />
      ) : (
        <p>No notes found for this category.</p>
      )}
    </section>
  );
}
