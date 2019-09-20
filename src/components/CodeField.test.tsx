import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import CodeField from "./CodeField";

describe("CodeField text area", () => {
  let wrapper: ShallowWrapper;
  let instance: CodeField;
  let textArea: ShallowWrapper;
  let mockUpdate: jest.Mock;
  beforeEach(() => {
    mockUpdate = jest.fn();
    wrapper = shallow(<CodeField onCodeUpdate={mockUpdate} code="" indentation={2}></CodeField>);
    instance = wrapper.instance() as CodeField;
    textArea = wrapper.find("#rawCode");
  });
  it("updates code", () => {
    textArea.simulate("change", { target: { value: "foobar\n123" } });
    expect(mockUpdate).toHaveBeenLastCalledWith("foobar\n123")
    expect(wrapper).toMatchSnapshot();
  });
});
