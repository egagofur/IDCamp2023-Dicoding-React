import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { IconArchive, IconActive } from "./assets";
import MainLayout from "./components/organisms/Layout/MainLayout";
import Header from "./components/molecules/header/header";
import Search from "./components/atoms/search/search";
import ButtonShow from "./components/molecules/buttonShow/buttonShow";
import CardNote from "./components/molecules/cardNote/cardNote";
import EmptyCard from "./components/molecules/emptyCard/emptyCard";
import FormNote from "./components/molecules/formNote/formNote";
import { TState } from "./common/types/notes";
import { deleteNote, updateNote } from "./utils/utils";
import { handleChangeTitle, handleSubmitNote } from "./utils/formUtils";
import { handleChangeSearchTerm, searchNotes } from "./utils/searchUtils";

class App extends React.Component<NonNullable<unknown>, TState> {
  constructor(props: NonNullable<unknown>) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          title: "Babel",
          body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
          archived: false,
          createdAt: "2022-04-14T04:27:34.572Z",
        },
      ],
      modal: false,
      archiveNote: false,
      newNote: {
        title: "",
        body: "",
      },
      maxCharacters: 50,
      searchTerm: "",
    };
  }

  onModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  onArchive = () => {
    this.setState((prevState) => ({
      archiveNote: !prevState.archiveNote,
    }));
  };

  onHandleDeleteNote = (noteId: number) => {
    this.setState((prevState) => ({
      notes: deleteNote(prevState.notes, noteId),
    }));
  };

  onHandleUpdateNote = (noteId: number) => {
    this.setState((prevState) => ({
      notes: updateNote(prevState.notes, noteId),
    }));
  };

  onHandleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prevState) => handleChangeTitle(prevState, e));
  };

  onHandleChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      newNote: {
        ...prevState.newNote,
        [name]: value,
      },
    }));
  };

  onHandleSubmitNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState((prevState) => handleSubmitNote(prevState));
  };

  onHandleChangeSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prevState) => handleChangeSearchTerm(prevState, e));
  };

  render(): React.ReactNode {
    const { modal, archiveNote, newNote, maxCharacters, notes, searchTerm } =
      this.state;

    const filteredNotes = searchNotes(searchTerm, notes);

    const filteredActiveNotes = filteredNotes.filter((note) => !note.archived);
    const filteredArchivedNotes = filteredNotes.filter((note) => note.archived);

    return (
      <section className="w-full text-primary">
        <MainLayout modal={modal}>
          <Header onModal={this.onModal} />
          <Search
            searchTerm={searchTerm}
            onHandleChangeSearchTerm={this.onHandleChangeSearchTerm}
          />
          <ButtonShow onArchive={this.onArchive} archiveNote={archiveNote} />
          <main className="space-y-2">
            {archiveNote ? (
              <React.Fragment>
                {filteredArchivedNotes.length > 0 ? (
                  <CardNote
                    notes={filteredArchivedNotes}
                    iconNote={<IconActive />}
                    onHandleDeleteNote={this.onHandleDeleteNote}
                    onHandleUpdateNote={this.onHandleUpdateNote}
                    titleNote="Archive"
                  />
                ) : (
                  <EmptyCard title="Archive" />
                )}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {filteredActiveNotes.length > 0 ? (
                  <CardNote
                    notes={filteredActiveNotes}
                    iconNote={<IconArchive />}
                    onHandleDeleteNote={this.onHandleDeleteNote}
                    onHandleUpdateNote={this.onHandleUpdateNote}
                    titleNote="Active"
                  />
                ) : (
                  <EmptyCard title="Active" />
                )}
              </React.Fragment>
            )}
          </main>
          <FormNote
            modal={modal}
            newNote={newNote}
            maxCharacters={maxCharacters}
            onHandleChangeBody={this.onHandleChangeBody}
            onHandleChangeTitle={this.onHandleChangeTitle}
            onHandleSubmitNote={this.onHandleSubmitNote}
          />
        </MainLayout>
      </section>
    );
  }
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
