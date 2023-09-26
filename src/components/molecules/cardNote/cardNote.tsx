import moment from "moment";
import React, { Component } from "react";
import { IconDelete } from "../../../assets";
import { TNote } from "../../../common/types/notes";

interface IProps {
  notes: TNote[];
  onHandleDeleteNote: (id: number) => void;
  onHandleUpdateNote: (id: number) => void;
  titleNote: string;
  iconNote: React.ReactNode;
}

export class CardNote extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const {
      onHandleDeleteNote,
      onHandleUpdateNote,
      titleNote,
      iconNote,
      notes,
    } = this.props;
    return (
      <div className="pb-6">
        <h1 className="text-lg font-bold">{titleNote}</h1>
        <div className="mt-2">
          {notes.map((note: TNote) => (
            <div
              key={note.id}
              className={`w-full mt-2 ${
                titleNote !== "Archive" ? "bg-[#F7CE45]/30" : null
              } bg-[#8E8E92]/10 rounded-md p-3.5 hover:bg-[#8E8E92]/40 text-start divide-y-[1px] divide-primary/25`}
            >
              <div className="flex justify-between">
                <div>
                  <h1 className="font-semibold leading-5 tracking-wide py-2">
                    {note.title}
                  </h1>
                  <p className="text-xs">{moment(note.createdAt).calendar()}</p>
                </div>
                <div className="flex gap-4 items-center">
                  <button
                    onClick={() => onHandleDeleteNote(note.id)}
                    className="bg-red-500 hover:bg-red-400  rounded-md p-2"
                  >
                    <IconDelete />
                  </button>
                  <button
                    onClick={() => onHandleUpdateNote(note.id)}
                    className={`rounded-md ${
                      titleNote === "Archive"
                        ? "p-1 bg-blue-400 hover:bg-blue-200"
                        : "p-2 bg-[#8E8E92] hover:bg-[#8E8E92]/50"
                    }`}
                  >
                    {iconNote}
                  </button>
                </div>
              </div>
              <p className="text-sm leading-5 tracking-wide py-2">
                {note.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CardNote;
