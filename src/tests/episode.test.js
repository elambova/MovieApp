import React from "react";
import Episode from "../Components/SingleResult/Episode";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Episode Component", () => {
  let episode;

  const episodeData = {
    imagesUrl: "https://image.tmdb.org/t/p/",
    apiData: {
      season_number: 3,
      id: 770350,
      name: "Kekoa",
      still_path: "/F6IgylvEnQVJIeQoiFr4cfvmWY.jpg",
      overview:
        "Five-0 investigates the murder of a traditional Hawaiian fighting master. Meanwhile, McGarrett hires a private investigator to follow his mother.",
      air_date: "2013-02-11",
      episode_number: 16,
      crew: [],
      guest_stars: [],
    },
  };
  const tvId = 32798;

  const handleClickReferrer = () => console.log("handleClickReferrer");

  beforeAll(() => {
    episode = shallow(
      <Router>
        <Episode
          episode={episodeData}
          tvId={tvId}
          handleClickReferrer={handleClickReferrer}
        />
      </Router>
    );
  });
  it("should exist", () => {
    expect(episode.exists()).toBe(true);
  });

  it("should be defined", () => {
    expect(episode).toBeDefined();
  });

  it("image path should match to .jpg", () => {
    expect(episode.props().children.props.episode.apiData.still_path).toMatch(
      /.jpg/
    );
  });
  it("crew array length should be 0", () => {
    expect(episode.props().children.props.episode.apiData.crew.length).toBe(0);
  });
});
