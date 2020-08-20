import React from "react";
import Enzyme, { mount } from "enzyme";
import Header from "../Components/Header";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Header", () => {
  let header;
  beforeAll(() => {
    header = mount(<Header />);
  });

  it("should exists", () => {
    expect(header.exists()).toBe(true);
  });

  it("should to be defined", () => {
    expect(header).toBeDefined();
  });
});
