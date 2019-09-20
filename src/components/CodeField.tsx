import React, { KeyboardEvent } from "react";
import { indentText } from "../util/codeUtil";
import LineCount from "./LineCount";
import "./CodeField.scss";

export type IProps = {
  indentation: number;
  onCodeUpdate(newCode: string): void;
  code: string;
};
const TAB_KEY_CODE = 9;

export class CodeField extends React.PureComponent<IProps> {
  render() {
    return (
      <div className="CodeField">
        <div className="CodeField-LineCount terminal-font">
          <LineCount lines={this.calcRows(this.props.code)} />
        </div>
        <textarea
          id="rawCode"
          className="CodeField-code terminal-font"
          onChange={this.updateCode.bind(this)}
          onKeyDown={this.indentIfTab.bind(this)}
          rows={Math.max(this.calcRows(this.props.code), 5)}
          value={this.props.code}
          autoCapitalize="false"
          autoComplete="false"
          autoCorrect="false"
          spellCheck={false}
        ></textarea>
      </div>
    );
  }
  updateCode(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.props.onCodeUpdate(e.target.value)
  }
  calcRows(text: string): number {
    return text.split("").filter(c => c === "\n").length + 1;
  }
  indentIfTab(event: KeyboardEvent<HTMLTextAreaElement>) {
    const targetElement = event.target as HTMLTextAreaElement;
    const selectionStart = targetElement.selectionStart;
    let identation = this.props.indentation;
    if (event.keyCode === TAB_KEY_CODE) {
      event.preventDefault();
      if (event.getModifierState("Shift")) {
        identation = -identation;
      }
      const [updatedCode, spacesAdded] = indentText(
        this.props.code,
        selectionStart,
        identation
      );

      this.props.onCodeUpdate(updatedCode);
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
