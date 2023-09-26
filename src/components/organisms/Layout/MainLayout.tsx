import React, { Component } from "react";

interface IProps {
  children: React.ReactNode;
  modal?: boolean;
}

export default class MainLayout extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { children, modal } = this.props;
    return (
      <section
        className={`relative max-w-md mx-auto bg-background px-5 py-2 ${
          modal ? "min-h-screen max-h-screen overflow-hidden" : "min-h-screen"
        }`}
      >
        {children}
      </section>
    );
  }
}
