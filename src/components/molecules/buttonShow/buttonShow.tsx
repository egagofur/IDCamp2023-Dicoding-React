import { Component } from "react";
import { IconActive, IconArchive } from "../../../assets";

interface IProps {
  archiveNote: boolean;
  onArchive: () => void;
}

export class ButtonShow extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    const { archiveNote, onArchive } = this.props;

    return (
      <div className="py-5 flex gap-2.5">
        <button
          onClick={onArchive}
          className="flex w-full items-center gap-2 bg-white rounded-md p-3 hover:bg-white/50"
        >
          <div
            className={`rounded-full ${
              archiveNote ? "bg-blue-400" : "bg-[#8E8E92]"
            }  w-8 h-8 flex items-center justify-center`}
          >
            {archiveNote ? <IconActive /> : <IconArchive />}
          </div>
          <span className="leading-5 tracking-wide">
            Show {archiveNote ? "Active" : "Archive"} ?
          </span>
        </button>
      </div>
    );
  }
}

export default ButtonShow;
