import { Component } from "react";

type IProps = {
  title: string;
};

export class EmptyCard extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <div className="flex justify-center flex-col bg-gray-700 text-gray-200 px-4 py-2 rounded-md mt-4 border">
        <h1 className="text-lg font-bold">Empty notes in {this.props.title}</h1>
        <p className="text-sm leading-5 tracking-wide py-2">
          You don't have any notes yet. Click the plus button to create a new
          note.
        </p>
      </div>
    );
  }
}

export default EmptyCard;
