import { TNote } from "../common/types/notes";

export function deleteNote(prevNotes: TNote[], noteId: number): TNote[] {
  return prevNotes.filter((note) => note.id !== noteId);
}

export function updateNote(prevNotes: TNote[], noteId: number) {
  return prevNotes.map((note) => {
    if (note.id === noteId) {
      return {
        ...note,
        archived: !note.archived,
      };
    }
    return note;
  });
}
