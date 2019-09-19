import React, { KeyboardEvent } from "react";
import { indentText } from "../util/codeUtil";
import LineCount from "./LineCount";
import "./CodeField.scss";

export type IProps = {
  indentation: number;
};
export interface IState {
  code: string;
  rows: number;
}

export class CodeField extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      code: "",
      rows: 5
    };
  }
  render() {
    return (
      <div className="CodeField">
        <div className="CodeField-LineCount terminal-font">
          <LineCount lines={this.calcRows(this.state.code)} />
        </div>
        <textarea
          id="rawCode"
          className="CodeField-code terminal-font"
          onChange={e => this.setState({ code: e.target.value })}
          onKeyDown={this.indentIfTab.bind(this)}
          rows={Math.max(this.calcRows(this.state.code), 5)}
          value={this.state.code}
          autoCapitalize="false"
          autoComplete="false"
          autoCorrect="false"
          spellCheck={false}
        ></textarea>
      </div>
    );
  }

  calcRows(text: string): number {
    return text.split("").filter(c => c === "\n").length + 1;
  }
  indentIfTab(event: KeyboardEvent<HTMLTextAreaElement>) {
    // keyCode 9 is tab
    const targetElement = event.target as HTMLTextAreaElement;
    const selectionStart = targetElement.selectionStart;
    let identation = this.props.indentation;
    if (event.keyCode === 9) {
      event.preventDefault();
      if (event.getModifierState("Shift")) {
        identation = -identation;
      }
      console.log(identation);
      let [updatedCode, spacesAdded] = indentText(
        this.state.code,
        selectionStart,
        identation
      );
      this.setState({
        code: updatedCode
      });
      requestAnimationFrame(() =>
        targetElement.setSelectionRange(
          selectionStart + spacesAdded,
          selectionStart + spacesAdded
        )
      );
    }
  }
}

export default CodeField;
