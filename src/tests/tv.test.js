import React from "react";
import Tv from "../Components/SingleResult/Tv";
import { BrowserRouter as Router } from "react-router-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Tv Component", () => {
  let tv;
  const tvData = {
    imagesUrl: "https://image.tmdb.org/t/p/",
    apiData: {
      id: 32798,
      created_by: [
        {
          id: 15345,
          credit_id: "5258a5ab760ee34661698b3d",
          name: "Alex Kurtzman",
          gender: 2,
          profile_path: "/uDZxuaV19OYMhN7vuuVg1bSlqUM.jpg",
        },
        {
          id: 15346,
          credit_id: "5258a5ab760ee34661698b37",
          name: "Roberto Orci",
          gender: 2,
          profile_path: null,
        },
        {
          id: 58839,
          credit_id: "5dce2354cc277c0012e44ff7",
          name: "Peter M. Lenkov",
          gender: 2,
          profile_path: "/boqqxkt8GcjCUmUsGRFzr3rSTDh.jpg",
        },
      ],
      name: "Hawaii Five-0",
      genres: [
        { id: 28, name: "Action" },
        { id: 80, name: "Crime" },
        { id: 18, name: "Drama" },
      ],
      homepage: "http://www.cbs.com/shows/hawaii_five_0",
      languages: ["en"],
      first_air_date: "2010-09-20",
      last_air_date: "2020-04-03",
      networks: [
        {
          name: "CBS",
          id: 16,
          logo_path: "/nm8d7P7MJNiBLdgIzUK0gkuEA4r.png",
          origin_country: "US",
        },
      ],
      next_episode_to_air: null,
      number_of_episodes: 240,
      number_of_seasons: 10,
      origin_country: ["US"],
      overview:
        "Steve McGarrett returns home to Oahu, in order to find his father's killer. The governor offers him the chance to run his own task force (Five-0). Steve's team is joined by Chin Ho Kelly, Danny \"Danno\" Williams, and Kono Kalakaua.",
      original_name: "Hawaii Five-0",
      poster_path: "/sIdCKlmM2nU4akIvFQaAIiU8YES.jpg",
      production_companies: [
        {
          id: 7296,
          logo_path: null,
          name: "K/O Paper Products",
          origin_country: "US",
        },
        {
          id: 125321,
          logo_path: null,
          name: "101st Street Entertainment",
          origin_country: "",
        },
        {
          id: 1081,
          logo_path: "/vfcpaPf6WktaCIHqF4FJAcek8q2.png",
          name: "CBS Television Studios",
          origin_country: "US",
        },
      ],
      seasons: [
        {
          air_date: null,
          episode_count: 4,
          id: 44051,
          name: "Specials",
          overview: "",
          poster_path: "/bLFCqGCXKz5OLKlWqLV05HqshJJ.jpg",
          season_number: 0,
        },
        {
          air_date: "2010-09-20",
          episode_count: 24,
          id: 44050,
          name: "Season 1",
          overview:
            "HAWAII FIVE-0 is a contemporary take on the classic series about a new elite federalized task force whose mission is to wipe out the crime that washes up on the Islands' sun-drenched beaches.",
          poster_path: "/neZuaVx5r6MoaOPnh4BSkZ5yy7e.jpg",
          season_number: 1,
        },
        {
          air_date: "2011-09-19",
          episode_count: 23,
          id: 44053,
          name: "Season 2",
          overview:
            "As Season 2 begins, McGarrett is in jail awaiting trial and Danny comes to visit him with a special guest. Danny finds out that Rachel's intentions may be different than he was hoping for. The task force gets a new team member whose job is to keep them in line.",
          poster_path: "/mxytlJqr51qMrw2RGky2pb0LoNQ.jpg",
          season_number: 2,
        },
        {
          air_date: "2012-09-24",
          episode_count: 24,
          id: 44052,
          name: "Season 3",
          overview:
            "The third season of Hawaii Five-0 picks up where season two left off, with Chin Ho being forced to choose between saving his wife or his cousin. McGarrett escorts his mother back to Hawaii and realizes she is in danger but question whether his mother may be keeping from him. Meanwhile, the team turns to ex-con and art expert August March to help hunt down a group of thieves.",
          poster_path: "/sPBOmNZ40pGLdlTW3wteMT91B5Y.jpg",
          season_number: 3,
        },
        {
          air_date: "2013-09-27",
          episode_count: 22,
          id: 44054,
          name: "Season 4",
          overview:
            "Picking up where Season 3 left off, we find McGarrett and Wo Fat cornered by unknown assailants in a detainment facility in season 4 of Hawaii Five-0, forcing McGarrett to break the law and turn on his own in order to find a kidnapped Catherine. Meanwhile Kono and Adam's secret location in Hong Kong is compromised, and Kono and Adam fight to stay alive when their hidden location is discovered.",
          poster_path: "/aAcgPVFfIDt2sK6vMWsP5xyvgo9.jpg",
          season_number: 4,
        },
        {
          air_date: "2014-09-26",
          episode_count: 25,
          id: 62826,
          name: "Season 5",
          overview:
            "In the 5th season of Hawaii Five-0, McGarrett continues to try to bring closure to his father's case and closure to his mother's past, while the state's brash Five-O unit, who may spar and jest among themselves, remain determined to eliminate the seedy elements from the 50th state.",
          poster_path: "/fsy6QAgPaY9gscYqMWU0IhFRq7V.jpg",
          season_number: 5,
        },
        {
          air_date: "2015-09-25",
          episode_count: 25,
          id: 70951,
          name: "Season 6",
          overview:
            "Hawaii Five-0 continues to wipe out the crime that washes up on the Islands' sun-drenched beaches in its 6th season. McGarrett and his team take on cases including a murder that leads to a centuries old lost pirate treasure, a copycat arsonist calling for the release of a murderous prisoner, and the unceasing hunt for Gabriel Waincroft.",
          poster_path: "/avZvb3LRJvhcJFtWdCkJkig4ae2.jpg",
          season_number: 6,
        },
        {
          air_date: "2016-09-23",
          episode_count: 25,
          id: 79757,
          name: "Season 7",
          overview:
            "In the season premiere, McGarrett refuses to listen to Danny's pleas to take it easy while recovering from surgery after the body of a serial killer is left in the Five-0 headquarters with an ivory chess piece in his mouth.",
          poster_path: "/v38zbCOzM7fRdfFlMukrqI6pFRG.jpg",
          season_number: 7,
        },
        {
          air_date: "2017-09-29",
          episode_count: 25,
          id: 91317,
          name: "Season 8",
          overview:
            "McGarrett, Danno and the Five-0 task force continue to wipe out the crime that washes up on the islands’ sun-drenched beaches, and this year are joined by new and old friends to help in their mission. Whether dealing with an infamous pyromaniac loose in the jungle, a devious black-hat hacker, stopping the dangerous Yakuza crime syndicate or planning to open a very bro-mantic restaurant, Five-0 continues to protect their loved ones, Hawaii’s citizens and visitors to the 50th state.",
          poster_path: "/xpRyeZhUNJK6espbGWHvvcgN8Pr.jpg",
          season_number: 8,
        },
        {
          air_date: "2018-09-28",
          episode_count: 25,
          id: 110012,
          name: "Season 9",
          overview:
            "McGarrett, Danno and the Five-0 task force continue to wipe out the crime that washes up on the islands' sun-drenched beaches, and this year are joined by new and old friends to help in their mission.",
          poster_path: "/fr1TgbDEr5cVCLPEmRuNzlwsCmF.jpg",
          season_number: 9,
        },
        {
          air_date: "2019-09-27",
          episode_count: 22,
          id: 129415,
          name: "Season 10",
          overview:
            "The 10th season of HAWAII FIVE-0 finds McGarrett and Five-0 reeling from the shots fired in HQ and who on the team was hit.",
          poster_path: "/sIdCKlmM2nU4akIvFQaAIiU8YES.jpg",
          season_number: 10,
        },
      ],
      status: "Ended",
    },
  };
  const handleClickReferrer = () => console.log("handle click referrer");
  const tvId = 32798;
  const handleClickSeason = () => console.log("handleClickSeason");
  beforeAll(() => {
    tv = shallow(
      <Router>
        <Tv
          tv={tvData}
          handleClickReferrer={handleClickReferrer}
          handleClickSeason={handleClickSeason}
          tvId={tvId}
        />
      </Router>
    );
  });

  it("should exists", () => {
    expect(tv.exists()).toBe(true);
  });

  it("should be defined", () => {
    expect(tv).toBeDefined();
  });

  it("should contain seasons length greater than 1", () => {
    expect(tv.props().children.props.tv.apiData.seasons.length).toBeGreaterThan(
      1
    );
  });

  it("status should be Ended", () => {
    expect(tv.props().children.props.tv.apiData.status).toMatch(/Ended/);
  });
});
