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
        <div
          id="rawCode"
          contentEditable={true}
          className="CodeField-code"
          onInput={this.updateCode.bind(this)}
          onKeyDown={this.indentIfTab.bind(this)}
        ></div>
      </div>
    );
  }
  updateCode(event: FormEvent<HTMLElement>) {
    const element = event.target as HTMLElement;
    this.setState({
      code: this.removeHtmlTags(element.innerHTML)
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
  indentIfTab(event: KeyboardEvent<HTMLDivElement>) {
    // keyCode 9 is tab
    const targetElement = event.target as HTMLElement;
    let needsUpdate = false;
    if (event.keyCode === 9) {
      event.preventDefault();
      const selection = document.getSelection();
      if (!selection || !selection.focusNode) {
        return;
      }
      if (selection.focusNode.nodeType !== Node.TEXT_NODE) {
        const selectionDiv = selection.focusNode as HTMLDivElement;
        selectionDiv.innerHTML = "&nbsp;&nbsp;";
        selection.collapse(selectionDiv, 1);
        needsUpdate = true;
      }
    }
    if (needsUpdate) {
      this.setState({
        code: this.removeHtmlTags(targetElement.innerHTML)
      });
    }
  }
}

export default CodeField;
