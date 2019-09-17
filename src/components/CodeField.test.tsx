import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import CodeField from "./CodeField";

describe("CodeField text area", () => {
  let wrapper: ShallowWrapper;
  let instance: CodeField;
  let textArea: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<CodeField></CodeField>);
    instance = wrapper.instance() as CodeField;
    textArea = wrapper.find("#rawCode");
  });
  describe("html tag removal", () => {
    it("works without newlines", () => {
      textArea.simulate("input", {
        target: { innerHTML: "foobar" }
      });
      expect(instance.state.code).toBe("foobar");
    });
    it("works without newlines", () => {
      textArea.simulate("input", {
        target: { innerHTML: "foo<div>bar</div>" }
      });
      expect(instance.state.code).toBe("foo\nbar");
    });
    it("works with multiple conscutive newlines", () => {
      textArea.simulate("input", {
        target: {
          innerHTML: "foo<div><br></div><div><br></div><div>bar</div>"
        }
      });
      expect(instance.state.code).toBe("foo\n\n\nbar");
    });
    it("works with newlines only", () => {
      textArea.simulate("input", {
        target: {
          innerHTML: "<div><br></div><div><br></div><div><br></div>"
        }
      });
      expect(instance.state.code).toBe("\n\n\n");
    });
  });
  describe("tab identation", () => {
    // beforeAll(() => {
    //   const selection = new Selection();
    //   window.getSelection = jest.fn().mockReturnValue(selection);
    //   document.getSelection = jest.fn().mockReturnValue(selection);
    // });
    // it("indents line when tab is pressed", () => {
    //   textArea.simulate("keydown", {
    //     keyCode: 9,
    //     getModifierState: jest.fn().mockReturnValue(false),
    //     preventDefault: jest.fn()
    //   });
    //   expect(instance.state.code).toBe("  ");
    // });
  });
});
