import React, { FormEvent, KeyboardEvent } from "react";
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
        <textarea
          id="rawCode"
          className="CodeField-code terminal-font"
          onChange={this.updateCode.bind(this)}
          onKeyDown={this.indentIfTab.bind(this)}
          value={this.state.code}
        ></textarea>
      </div>
    );
  }
  updateCode(event: FormEvent<HTMLTextAreaElement>) {
    const element = event.target as HTMLTextAreaElement;
    this.setState({
      code: element.value
    });
  }
  removeHtmlTags(code: string): string {
    return code
      .replace(/&nbsp;/g, "\n")
      .replace(/<div><br><\/div >/g, "\n")
      .replace(/<div>/g, "\n")
      .replace(/<\/div>/g, "")
      .replace(/<br>/g, "");
  }
  indentIfTab(event: KeyboardEvent<HTMLTextAreaElement>) {
    // keyCode 9 is tab
    const targetElement = event.target as HTMLTextAreaElement;
    const selectionStart = targetElement.selectionStart;
    if (event.keyCode === 9) {
      event.preventDefault();
      const selection = document.getSelection();
      if (!selection || !selection.focusNode) {
        return;
      }
      const code = targetElement.value.split("");
      const firstHalf = code.splice(0, selectionStart);
      firstHalf.push("  ");
      const updatedCode = [...firstHalf, ...code].join("");
      this.setState({
        code: updatedCode,
        rawCode: updatedCode,
      })
      targetElement.focus();
      requestAnimationFrame(() => targetElement.setSelectionRange(selectionStart + 2, selectionStart+2));
    }
  }
}

export default CodeField;
