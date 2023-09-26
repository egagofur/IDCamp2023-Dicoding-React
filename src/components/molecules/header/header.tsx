import { Component } from "react";
import { IconCreate } from "../../../assets";
import moment from "moment";

interface IProps {
  onModal: () => void;
}

export class Header extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { onModal } = this.props;
    return (
      <header className="flex justify-between items-end pt-2">
        <div className="flex flex-col-reverse">
          <h1 className="text-3xl -mt-2 leading-10 font-bold tracking-wide">
            Notes
          </h1>
          <p className="text-sm text-secondary/60 leading-5">
            {moment().format("DD MMMM, YYYY")}
          </p>
        </div>
        <button
          onClick={onModal}
          className="p-2 hover:bg-white/50 hover:rounded-md"
        >
          <IconCreate />
        </button>
      </header>
    );
  }
}

export default Header;
