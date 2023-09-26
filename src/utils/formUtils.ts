import { TState } from "../common/types/notes";

export function handleChangeTitle(
  prevState: TState,
  e: React.ChangeEvent<HTMLInputElement>
) {
  const { name, value } = e.target;
  const maxCharacters = 50;

  if (value.length <= maxCharacters) {
    return {
      ...prevState,
      newNote: {
        ...prevState.newNote,
        [name]: value,
      },
      maxCharacters: maxCharacters - value.length,
    };
  }
  return prevState;
}

export function handleChangeBody(
  prevState: TState,
  e: React.ChangeEvent<HTMLTextAreaElement>
) {
  const { name, value } = e.target;
  return {
    ...prevState,
    [name]: value,
  };
}

export function handleSubmitNote(prevState: TState) {
  const newDataNote = {
    id: +new Date(),
    title: prevState.newNote.title,
    body: prevState.newNote.body,
    archived: false,
    createdAt: new Date().toISOString(),
  };
  return {
    ...prevState,
    notes: [...prevState.notes, newDataNote],
    newNote: {
      title: "",
      body: "",
    },
    modal: false,
    maxCharacters: 50,
  };
}
