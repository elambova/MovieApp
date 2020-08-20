import React from "react";
import Enzyme, { mount } from "enzyme";
import NotFound from "../Components/NotFound";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router, Link } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe("Test NotFound", () => {
  let notFound;
  const handleClickReferrer = () => console.log("handleClickReferrer");

  beforeAll(() => {
    notFound = mount(
      <Router>
        <NotFound handleClickReferrer={handleClickReferrer} />
      </Router>
    );
  });

  it("should exists", () => {
    expect(notFound.exists()).toBe(true);
  });

  it("should to be defined", () => {
    expect(notFound).toBeDefined();
  });

  it("should content link to homepage", () => {
    expect(notFound.find(Link)).toHaveLength(1);
  });
});
