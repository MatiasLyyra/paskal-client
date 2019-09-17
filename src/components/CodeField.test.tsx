import React from "react";
import { shallow } from "enzyme";
import CodeField from "./CodeField";

it("removes html tags from code", () => {
  const wrapper = shallow(<CodeField></CodeField>);
  const instance = wrapper.instance() as CodeField;
});
