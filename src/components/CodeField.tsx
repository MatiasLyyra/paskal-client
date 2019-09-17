import React from "react";
import "./CodeField.scss";

export type IProps = {};
export interface IState {
  code: string;
  rawCode: string;
}

export class CodeField extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      code: "",
      rawCode: ""
    };
  }
  render() {
    return (
      <div>
        <div
          ref="rawCode"
          contentEditable={true}
          className="CodeField-code"
          onInput={this.updateCode.bind(this)}
        ></div>
        <textarea
          className="CodeField-Code"
          readOnly
          value={this.state.code}
        ></textarea>
      </div>
    );
  }
  updateCode() {
    const eventElemnt = this.refs.rawCode as HTMLElement;
    this.setState({
      code: this.removeHtmlTags(eventElemnt.innerHTML)
    });
  }
  removeHtmlTags(code: string): string {
    return code.replace(/<\/?div>/g, "\n").replace(/<br>/g, "");
  }
}

export default CodeField;
