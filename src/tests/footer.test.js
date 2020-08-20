import React from "react";
import Enzyme, { mount } from "enzyme";
import Footer from "../Components/Footer";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Footer", () => {
  let footer;
  beforeAll(() => {
    footer = mount(<Footer />);
  });

  it("should exists", () => {
    expect(footer.exists()).toBe(true);
  });

  it("should to be defined", () => {
    expect(footer).toBeDefined();
  });
});
