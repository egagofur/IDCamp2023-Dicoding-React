import { TNote, TState } from "../common/types/notes";

export function handleChangeSearchTerm(
  prevState: TState,
  e: React.ChangeEvent<HTMLInputElement>
) {
  return {
    ...prevState,
    searchTerm: e.target.value,
  };
}

export function searchNotes(searchTerm: string, notes: TNote[]) {
  const filteredNotes = notes.filter((note) => {
    const titleMatch = note.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const bodyMatch = note.body
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return titleMatch || bodyMatch;
  });
  return filteredNotes;
}
