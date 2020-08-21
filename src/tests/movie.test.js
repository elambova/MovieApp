import React from "react";
import Movie from "../Components/SingleResult/Movie";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Movie Component", () => {
  let movie;
  const movieData = {
    imagesUrl: "https://image.tmdb.org/t/p/",
    apiData: {
      id: 58,
      original_title: "Pirates of the Caribbean: Dead Man's Chest",
      overview:
        "Captain Jack Sparrow works his way out of a blood debt with the ghostly Davey Jones to avoid eternal damnation.",
      poster_path: "/AdRQGfT05z6L9gIpUpkh4McMmpm.jpg",
      production_companies: [
        {
          id: 2,
          logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
          name: "Walt Disney Pictures",
          origin_country: "US",
        },
        {
          id: 130,
          logo_path: "/c9dVHPOL3cqCr2593Ahk0nEKTEM.png",
          name: "Jerry Bruckheimer Films",
          origin_country: "US",
        },
        {
          id: 19936,
          logo_path: null,
          name: "Second Mate Productions",
          origin_country: "US",
        },
      ],
      production_countries: [
        { iso_3166_1: "US", name: "United States of America" },
      ],
      release_date: "2006-06-20",
      status: "Released",
      title: "Pirates of the Caribbean: Dead Man's Chest",
      spoken_languages: [
        { iso_639_1: "en", name: "English" },
        { iso_639_1: "tr", name: "Türkçe" },
        { iso_639_1: "el", name: "ελληνικά" },
        { iso_639_1: "zh", name: "普通话" },
      ],
      genres: [
        { id: 12, name: "Adventure" },
        { id: 14, name: "Fantasy" },
        { id: 28, name: "Action" },
      ],
      homepage: "http://disney.go.com/disneypictures/pirates/",
    },
  };

  const handleClickReferrer = () => console.log("handle click referrer");

  beforeAll(() => {
    movie = shallow(
      <Router>
        <Movie movie={movieData} handleClickReferrer={handleClickReferrer} />
      </Router>
    );
  });

  it("should exists", () => {
    expect(movie.exists()).toBe(true);
  });

  it("should be defined", () => {
    expect(movie).toBeDefined();
  });

  it("should contain title", () => {
    expect(
      movie.props().children.props.movie.apiData.title.length
    ).toBeGreaterThan(0);
  });
});
