import React, { Component } from "react";

interface IProps {
  searchTerm: string;
  onHandleChangeSearchTerm: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export class Search extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    const { searchTerm, onHandleChangeSearchTerm } = this.props;
    return (
      <div className="pt-5 pb-2">
        <input
          type="text"
          autoFocus
          className="w-full h-9 px-6 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary/60"
          placeholder="Search"
          value={searchTerm}
          onChange={onHandleChangeSearchTerm}
        />
      </div>
    );
  }
}

export default Search;
