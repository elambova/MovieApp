import React from "react";
import Enzyme, { mount } from "enzyme";
import Form from "../Components/Form";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Form", () => {
  let form;
  const handleSubmit = () => console.log("handle submit");
  beforeAll(() => {
    form = mount(<Form handleSubmit={handleSubmit} />);
  });

  it("should exists", () => {
    expect(form.exists()).toBe(true);
  });

  it("should to be defined", () => {
    expect(form).toBeDefined();
  });

  it("input should to be with length 1 and to be defined", () => {
    expect(form.find("#submit-btn")).toHaveLength(1);
    expect(form.find("#submit-btn")).toBeDefined();
  });
});
