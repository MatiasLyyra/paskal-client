import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import CodeField from "./CodeField";

describe("CodeField text area", () => {
  let wrapper: ShallowWrapper;
  let instance: CodeField;
  let textArea: ShallowWrapper;
  const indentation = 2;
  beforeEach(() => {
    wrapper = shallow(<CodeField indentation={indentation}></CodeField>);
    instance = wrapper.instance() as CodeField;
    textArea = wrapper.find("#rawCode");
  });
  it("updates code", () => {
    textArea.simulate("change", { target: { value: "foobar\n123" } });
    expect(instance.state.code).toBe("foobar\n123");
    expect(wrapper).toMatchSnapshot();
  });
});
