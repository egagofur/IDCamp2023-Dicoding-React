export type TNote = {
  id: number;
  title: string;
  body: string;
  archived: boolean;
  createdAt: string;
};

export type TNewNote = {
  title: string;
  body: string;
};

export type TState = {
  notes: TNote[];
  modal: boolean;
  archiveNote: boolean;
  newNote: TNewNote;
  maxCharacters: number;
  searchTerm: string;
};
