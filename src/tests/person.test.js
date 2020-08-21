import React from "react";
import Person from "../Components/SingleResult/Person";
import { BrowserRouter as Router } from "react-router-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Person Component", () => {
  let person;
  const personData = {
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
    imagesUrl: "https://image.tmdb.org/t/p/",
  };
  const handleClickReferrer = () => console.log("handle click referrer");

  beforeAll(() => {
    person = shallow(
      <Router>
        <Person person={personData} handleClickReferrer={handleClickReferrer} />
      </Router>
    );
  });

  it("should exists", () => {
    expect(person.exists()).toBe(true);
  });

  it("should be defined", () => {
    expect(person).toBeDefined();
  });

  it("should contain biography", () => {
    expect(person.props().children.props.person.biography).not.toBeNull();
  });
});
