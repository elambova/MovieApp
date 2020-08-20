import React from "react";
import Enzyme, { shallow } from "enzyme";
import ResultContainer from "../Components/ResultContainer";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

const data = {
  imagesUrl: "https://image.tmdb.org/t/p/w185",
  apiData: [
    {
      poster_path: "/jGWpG4YhpQwVmjyHEGkxEkeRf0S.jpg",
      popularity: 25.421,
      vote_count: 10081,
      video: false,
      media_type: "movie",
      id: 285,
      adult: false,
      backdrop_path: "/kobscH4qOsYQNTZnkrF5zkPCsvX.jpg",
      original_language: "en",
      original_title: "Pirates of the Caribbean: At World's End",
      genre_ids: [28, 12, 14],
      title: "Pirates of the Caribbean: At World's End",
      vote_average: 7.2,
      overview:
        "Captain Barbossa, long believed to be dead, has come back to life and is headed to the edge of the Earth with Will Turner and Elizabeth Swann. But nothing is quite as it seems.",
      release_date: "2007-05-19",
    },
  ],
};
const handleClickReferrer = () => {
  console.log("handleClickReferrer");
};

const handleClickMovie = () => {
  console.log("handleClickMovie");
};

const handleClickTv = () => {
  console.log("handleClickTv");
};

const handleClickPerson = () => {
  console.log("handleClickPerson");
};

describe("Test ResultContainer", () => {
  let result;
  beforeAll(() => {
    result = shallow(
      <ResultContainer
        data={data}
        handleClickReferrer={handleClickReferrer}
        handleClickMovie={handleClickMovie}
        handleClickTv={handleClickTv}
        handleClickPerson={handleClickPerson}
      />
    );
  });

  it("should be exists", () => {
    expect(result.exists()).toBe(true);
  });

  it("should be render", () => {
    expect(result).toMatchSnapshot();
  });

  it("renders without crashing given the required props", () => {
    expect(toJson(result)).toMatchSnapshot();
  });
});
