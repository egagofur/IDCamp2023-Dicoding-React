import React, { Component } from "react";
import { TNewNote } from "../../../common/types/notes";

type IProps = {
  modal: boolean;
  newNote: TNewNote;
  maxCharacters: number;
  onHandleChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onHandleChangeBody: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onHandleSubmitNote: (e: React.FormEvent<HTMLFormElement>) => void;
};

export class FormNote extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    const {
      modal,
      newNote,
      maxCharacters,
      onHandleChangeTitle,
      onHandleChangeBody,
      onHandleSubmitNote,
    } = this.props;
    return (
      <div
        className={`absolute h-auto pb-8 bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl ${
          modal ? "block" : "hidden"
        }  mx-auto`}
      >
        <div className="flex flex-col mt-6 px-5 h-full">
          <h1 className="text-lg font-bold mb-2">New notes</h1>
          <form onSubmit={onHandleSubmitNote} className="space-y-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full h-9 px-6 text-sm rounded-lg border focus:outline-none focus:ring-1 focus:ring-secondary/60"
                placeholder="Input title"
                value={newNote.title}
                onChange={onHandleChangeTitle}
              />
              <p
                className={`${
                  maxCharacters === 0
                    ? "text-red-600 text-lg"
                    : "text-secondary"
                }`}
              >
                Characters remaining {maxCharacters}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="body">Body</label>
              <textarea
                name="body"
                id="body"
                cols={20}
                rows={5}
                className="block p-2.5 w-full text-sm rounded-lg border focus:outline-none focus:ring-1 focus:ring-secondary/60"
                placeholder="Input body"
                value={newNote.body}
                onChange={onHandleChangeBody}
              />
            </div>
            <button type="submit">
              <span className="text-sm font-semibold text-white bg-[#F7CE45]/80 rounded-md py-2 px-4">
                Save
              </span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default FormNote;
