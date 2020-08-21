import React from "react";
import People from "../Components/AllResults/People";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe("Test People Component", () => {
  let people;
  const peopleData = [
    {
      apiData: {
        biography:
          "Alex O'Loughlin is an Australian actor, writer and director, who plays Lieutenant Commander Steve McGarrett on CBS' remake of the TV series Hawaii Five-0. He had starring roles in the films Oyster Farmer (2004) and The Back-up Plan (2010), as well as on such television series as Moonlight (2008) and Three Rivers (2009).↵↵O'Loughlin was born on 24 August 1976, in Canberra, Australia, of Irish and Scottish descent.His father is a physics and astronomy teacher in Sydney and his mother is a nurse.↵↵O'Loughlin suffered from obsessive-compulsive disorder when he was a child. He enrolled at the National Institute of Dramatic Art (NIDA) in Sydney in 1999 and graduated in June 2002 after completing a three-year, full-time Bachelor of Dramatic Art program.↵↵O'Loughlin began working in short films and fringe theatre as a teenager in Sydney. One of his first acting jobs was an extra in a commercial, playing a Marine. After graduating from NIDA (National Institute of Dramatic Arts), he began his career in Australian television and film productions. Some of his TV credits include roles in BlackJack: Sweet Science, Love Bytes and White Collar Blue.",
        birthday: "1976-08-24",
        deathday: null,
        homepage: null,
        id: 41297,
        known_for_department: "Acting",
        name: "Alex O'Loughlin",
        place_of_birth: "Canberra, Australian Capital Territory, Australia",
        profile_path: "/mcaCdq9UcqM4erNTjB2N4bmEsWw.jpg",
      },
    },
  ];
  const secure_url = "https://image.tmdb.org/t/p/";
  const handleClickPerson = () => console.log("handle click person");
  const handleClickMovie = () => console.log("handle click movie");
  const handleClickTv = () => console.log("handle click tv");

  beforeAll(() => {
    people = shallow(
      <Router>
        <People
          people={peopleData}
          secure_url={secure_url}
          handleClickPerson={handleClickPerson}
          handleClickMovie={handleClickMovie}
          handleClickTv={handleClickTv}
        />
      </Router>
    );
  });

  it("should be defined", () => {
    expect(people).toBeDefined();
  });

  it("should exists", () => {
    expect(people.exists()).toBe(true);
  });

  it("should contain image", () => {
    expect(people.find("img")).toBeTruthy();
  });

  it("deathday from people.children.props.deathday should be null", () => {
    expect(people.props().children.props.people[0].apiData.deathday).toBeNull();
  });
});
