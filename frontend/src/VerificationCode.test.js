import React from "react";
import { shallow, mount, render } from "enzyme";
import VerificationCode from "./VerificationCode";

describe("App component tests", () => {
  const wrapper = shallow(<VerificationCode />);

  it("expect to render Login component", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should have a btn component", () => {
    expect(wrapper.find("button")).toHaveLength(1);
    expect(wrapper.find("button").text()).toEqual("Submit");
  });

  it("should have a input component", () => {
    expect(wrapper.find("input")).toHaveLength(0);
  });

  it("should have a 6 input element", () => {
    const wrapper = mount(<VerificationCode />);
    expect(wrapper.find(".foo-bar")).toHaveLength(6);
    wrapper.unmount();
  });

});