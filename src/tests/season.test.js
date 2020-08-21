import React from "react";
import Season from "../Components/SingleResult/Season";
import { BrowserRouter as Router } from "react-router-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Season Component", () => {
  let season;
  const seasonData = {
    imagesUrl: "https://image.tmdb.org/t/p/",
    apiData: {
      season_number: 3,
      id: 44052,
      name: "Season 3",
      poster_path: "/sPBOmNZ40pGLdlTW3wteMT91B5Y.jpg",
      overview:
        "The third season of Hawaii Five-0 picks up where season two left off, with Chin Ho being forced to choose between saving his wife or his cousin. McGarrett escorts his mother back to Hawaii and realizes she is in danger but question whether his mother may be keeping from him. Meanwhile, the team turns to ex-con and art expert August March to help hunt down a group of thieves.",
      air_date: "2012-09-24",
      episodes: [
        {
          air_date: "2012-09-24",
          episode_number: 1,
          id: 770336,
          name: "La O Na Makuahine",
          overview:
            'The team goes after Wo Fat and Delano for the death of an important person. Steve must resolve the issues between him and his "dead" mother, once he finds her alive and well.',
          production_code: "301",
          season_number: 3,
          show_id: 32798,
          still_path: "/ly1MF8RkSNzeJgwCg3j5H6jNbT6.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [],
          guest_stars: [],
        },
        {
          air_date: "2012-10-01",
          episode_number: 2,
          id: 770337,
          name: "Kanalua",
          overview:
            "Steve goes to Cat for help finding his mother. When an art heist turns deadly, Five-0 turns to August March.",
          production_code: "302",
          season_number: 3,
          show_id: 32798,
          still_path: "/qHcZg7eEvXoKIzlaTpycgx8LnRF.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [
            {
              id: 1215672,
              credit_id: "5258a59d760ee34661697938",
              name: "Fred Toye",
              department: "Directing",
              job: "Director",
              gender: 2,
              profile_path: "/nQKzsOdbVZGv16MezxCt4xJSTMa.jpg",
            },
          ],
          guest_stars: [],
        },
        {
          air_date: "2012-10-08",
          episode_number: 3,
          id: 770338,
          name: "Lana I Ka Moana",
          overview:
            "Steve and Danny take some time off to enjoy a little fishing only to find themselves stranded and facing pirates.",
          production_code: "303",
          season_number: 3,
          show_id: 32798,
          still_path: "/7EqYIohZLvC98qyYRFWjO9KuK5n.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [
            {
              id: 72258,
              credit_id: "5258a59f760ee34661697c0f",
              name: "Steve Boyum",
              department: "Directing",
              job: "Director",
              gender: 2,
              profile_path: null,
            },
          ],
          guest_stars: [
            {
              id: 36216,
              name: "Cynthia Watros",
              credit_id: "57fcbcc89251411786005425",
              character: "Katie Burgess",
              order: 172,
              gender: 1,
              profile_path: "/xxuOR9OXVcnzfbvIjFY6ZKN1kjJ.jpg",
            },
          ],
        },
        {
          air_date: "2012-10-15",
          episode_number: 4,
          id: 770341,
          name: "Popilikia",
          overview:
            "The death of a polo player who literally loses his head is investigated. Meanwhile, McGarrett’s mother pays him an unexpected visit.",
          production_code: "304",
          season_number: 3,
          show_id: 32798,
          still_path: "/3mtrS20mCMZePzjC3Wen1rrB8mY.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [
            {
              id: 1309579,
              credit_id: "5258a5a0760ee34661697d1c",
              name: "Christine Moore",
              department: "Directing",
              job: "Director",
              gender: 1,
              profile_path: null,
            },
            {
              id: 1218229,
              credit_id: "5258a5a0760ee34661697cfc",
              name: "Stephanie Sengupta",
              department: "Writing",
              job: "Writer",
              gender: 1,
              profile_path: null,
            },
          ],
          guest_stars: [
            {
              id: 1313823,
              name: "Guy Wilson",
              credit_id: "5ef3ba879661fc003325e525",
              character: "Jake Madsen",
              order: 398,
              gender: 2,
              profile_path: "/qoBVJOg8yYo5UpZoyrAV0jhhl0n.jpg",
            },
          ],
        },
        {
          air_date: "2012-11-05",
          episode_number: 5,
          id: 770342,
          name: "Mohai",
          overview:
            "A grisly murder leads Five-0 to discover a ritualistic killing on Halloween, and the evidence suggests that the murderer will soon strike again.",
          production_code: "307",
          season_number: 3,
          show_id: 32798,
          still_path: "/uLzpNoB3HEeev6VAqCRN8CHzXl2.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [],
          guest_stars: [],
        },
        {
          air_date: "2012-11-12",
          episode_number: 6,
          id: 770340,
          name: "I Ka Wa Mamua",
          overview:
            "When Danny is forced to remain completely still while bomb technicians disarm a bomb that he has accidentally almost triggered, McGarrett distracts him by getting his partner to tell the story about his toughest and most emotional case from his days as a cop in New Jersey.",
          production_code: "305",
          season_number: 3,
          show_id: 32798,
          still_path: "/uQBEOQUQclHr9cBb5uqbU1iVulE.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [],
          guest_stars: [],
        },
        {
          air_date: "2012-11-19",
          episode_number: 7,
          id: 770339,
          name: "Ohuna",
          overview:
            "While the team investigates the murder of a young computer hacker, McGarrett tries to stage a long-needed reunion between his mother and his sister.",
          production_code: "306",
          season_number: 3,
          show_id: 32798,
          still_path: "/uw1tUNrAtaTclM3fl96jdPVzMqt.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [],
          guest_stars: [
            {
              id: 2394,
              name: "Alan Ruck",
              credit_id: "57d1b8e4c3a3684e2e000759",
              character: "Mr Slater",
              order: 500,
              gender: 2,
              profile_path: "/4gyMiVcxiynVDXeLkALf8h0seoD.jpg",
            },
          ],
        },
        {
          air_date: "2012-11-26",
          episode_number: 8,
          id: 770345,
          name: "Wahine'inoloa",
          overview:
            "McGarrett plays cat and mouse with a smart and seductive therapist he believes murdered her patient. Meanwhile, Catherine must hunt down one of Doris's old targets who is now seeking revenge.",
          production_code: "308",
          season_number: 3,
          show_id: 32798,
          still_path: "/l7kuTTfpM32HIa5CfItv4YdNbgt.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [],
          guest_stars: [],
        },
        {
          air_date: "2012-12-03",
          episode_number: 9,
          id: 770344,
          name: "Ha'awe Make Loa",
          overview:
            "Max and his crush (Rumer Willis) get put in harm’s way when a botched bank robbery leads the team to determine that the criminals had very unexpected motives. Meanwhile, Danny is stuck with the tough task of coming to the rescue of the most beautiful women in the world when a stalker goes after a Victoria’s Secret model.",
          production_code: "311",
          season_number: 3,
          show_id: 32798,
          still_path: "/agKw3NbQO4QVQZXOB68TYAv6g3j.jpg",
          vote_average: 7.5,
          vote_count: 2,
          crew: [],
          guest_stars: [],
        },
        {
          air_date: "2012-12-10",
          episode_number: 10,
          id: 770343,
          name: "Huaka'l Kula",
          overview:
            "An Aloha Girls camping trip with Grace turns deadly when an armed man takes McGarrett and a little girl hostage. Meanwhile, Adam introduces Kono to his dangerous brother who was recently released from prison.",
          production_code: "309",
          season_number: 3,
          show_id: 32798,
          still_path: "/fwZ5PqOuAXXSRftBwNTK43N4VJ2.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [],
          guest_stars: [
            {
              id: 82093,
              name: "Daniel Henney",
              credit_id: "57913c3d9251415fd8001bf9",
              character: "Michael Noshimuri",
              order: 167,
              gender: 2,
              profile_path: "/wwLWCVSP9la3dG6xQBqUd1YzwMh.jpg",
            },
            {
              id: 112742,
              name: "Emily Alyn Lind",
              credit_id: "590b1343c3a3684363012b2c",
              character: "Lucy",
              order: 189,
              gender: 1,
              profile_path: "/clCrzVr5SzWWohYaTC1VABnBvFd.jpg",
            },
          ],
        },
        {
          air_date: "2012-12-17",
          episode_number: 11,
          id: 770346,
          name: "Kahu",
          overview:
            "After a carjack attempt on Steve and Catherine, they meet a boy whose father is missing and could be a grave danger.",
          production_code: "312",
          season_number: 3,
          show_id: 32798,
          still_path: "/8Spsyp2q0yOWYySnRzrfUVJI5uz.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [],
          guest_stars: [
            {
              id: 53494,
              name: "Tristan Lake Leabu",
              credit_id: "5cc4c7b1c3a36827d5846a44",
              character: "Ethan Awana",
              order: 314,
              gender: 2,
              profile_path: null,
            },
          ],
        },
        {
          air_date: "2013-01-14",
          episode_number: 12,
          id: 770347,
          name: "Kapu",
          overview:
            "Danny and McGarrett investigate the murder of an Oahu University professor whose body is found decomposing in a tub of acid and his boss, his teaching assistant and a student who he busted for cheating are all viable suspects.",
          production_code: "313",
          season_number: 3,
          show_id: 32798,
          still_path: "/lr8c5I4x41AzdN1Nga1GOsLOUAK.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [],
          guest_stars: [],
        },
        {
          air_date: "2013-01-20",
          episode_number: 13,
          id: 770349,
          name: "Olelo Ho'Opa'I Make",
          overview:
            "Chin Ho becomes a victim of deception, after waking up behind bars with no memory as to how he got there.",
          production_code: "314",
          season_number: 3,
          show_id: 32798,
          still_path: "/qBAAWvCs3z0JADqiXdfr95tZbUF.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [],
          guest_stars: [],
        },
        {
          air_date: "2013-01-21",
          episode_number: 14,
          id: 770348,
          name: "Hana I Wa'Ia",
          overview:
            "The team is directed to investigate when a prostitute is murdered in a Congressman's home, who is nowhere to be found. Danny has his own drama as the custody hearing regarding Grace goes to court.",
          production_code: "310",
          season_number: 3,
          show_id: 32798,
          still_path: "/y6j7wwUfK0Hnabc4YixKg4AxS8r.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [],
          guest_stars: [],
        },
        {
          air_date: "2013-02-04",
          episode_number: 15,
          id: 770351,
          name: "Hookman",
          overview:
            "A double amputee goes after the police officers responsible for his injuries -- including McGarrett's father.",
          production_code: "315",
          season_number: 3,
          show_id: 32798,
          still_path: "/l7inm6pdNC34SrYr09K9gxNG04t.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [],
          guest_stars: [],
        },
        {
          air_date: "2013-02-11",
          episode_number: 16,
          id: 770350,
          name: "Kekoa",
          overview:
            "Five-0 investigates the murder of a traditional Hawaiian fighting master. Meanwhile, McGarrett hires a private investigator to follow his mother.",
          production_code: "316",
          season_number: 3,
          show_id: 32798,
          still_path: "/F6IgylvEnQVJIeQoiFr4cfvmWY.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [],
          guest_stars: [],
        },
        {
          air_date: "2013-02-18",
          episode_number: 17,
          id: 770352,
          name: "Pa'ani",
          overview:
            "As the island prepares itself for the Pro Bowl, an executive from a California technology company is found dead after a tactical ops team building exercise. Unexpectedly, a star running back from the football game (Arian Foster) winds up helping Five-0 during the investigation.",
          production_code: "317",
          season_number: 3,
          show_id: 32798,
          still_path: "/NSLah3EkjUDcDvMh841nCrI08E.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [],
          guest_stars: [],
        },
        {
          air_date: "2013-03-18",
          episode_number: 18,
          id: 770353,
          name: "Na Ki'i",
          overview:
            "While apprehending his latest fugitive, Dog the Bounty Hunter is witness to a woman falling off a balcony to her death. Five-0's trail leads them to discover that the victim lead a double life as a roller derby player. Unable to get any useful information about the victim from her teammates, Catherine is asked to go undercover as the team's jammer. Doris comes home to find a burglar robbing her stash of sensitive information.",
          production_code: "318",
          season_number: 3,
          show_id: 32798,
          still_path: "/kb62A3MhH1WUWcoqBQ8uHaam3Xu.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [],
          guest_stars: [],
        },
        {
          air_date: "2013-03-25",
          episode_number: 19,
          id: 770354,
          name: "Hoa Pili",
          overview:
            "When threats turn deadly against a tour company that endangers the local shark population, Five-0 faces the difficult task of narrowing down the suspect list. Meanwhile, the team debates whether or not Kamekona will earn his helicopter license.",
          production_code: "319",
          season_number: 3,
          show_id: 32798,
          still_path: "/k2EStW7GqR5O9UY8gajGD4xkfVf.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [],
          guest_stars: [],
        },
        {
          air_date: "2013-04-15",
          episode_number: 20,
          id: 770359,
          name: "Olelo Pa'a",
          overview:
            "McGarrett and Catherine head into North Korea to retrieve a fallen friend's body. While there, McGarrett recalls his last perilous mission in the country.",
          production_code: "320",
          season_number: 3,
          show_id: 32798,
          still_path: "/z5sychQby6IL3Y0R4NN6xFPiPPa.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [],
          guest_stars: [
            {
              id: 64295,
              name: "Alan Ritchson",
              credit_id: "55e0ea439251416c09000068",
              character: "Freddie Hart",
              order: 139,
              gender: 2,
              profile_path: "/hY8UFnFb4j5ghpYvDdMOVSJ4tOD.jpg",
            },
          ],
        },
        {
          air_date: "2013-04-29",
          episode_number: 21,
          id: 770356,
          name: "Imi Loko Ka 'Uhane",
          overview:
            "Five-0 allows a talk show host and her crew to follow them for the day, but the investigation turns dangerous when they have a run-in with Wo Fat.",
          production_code: "321",
          season_number: 3,
          show_id: 32798,
          still_path: "/gvT5QPCIKom0Yx4jcfryXdRw5es.jpg",
          vote_average: 7.5,
          vote_count: 2,
          crew: [],
          guest_stars: [],
        },
        {
          air_date: "2013-05-06",
          episode_number: 22,
          id: 770355,
          name: "Ho'opio",
          overview:
            "When the body of a young girl who was kidnapped 10 years earlier is discovered, Five-0 must hunt down the kidnappers who have now taken their next victim. Meanwhile, Kono asks Catherine for a favor that could damage her relationship with Adam.",
          production_code: "322",
          season_number: 3,
          show_id: 32798,
          still_path: "/nFDE7WNpLzYzgU7tEteqsiP3I7e.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [],
          guest_stars: [],
        },
        {
          air_date: "2013-05-13",
          episode_number: 23,
          id: 770358,
          name: "He Welo 'Oihana",
          overview:
            "McGarrett must help his mother execute a covert op to retrieve an incriminating microfiche. Meanwhile, Kono’s life is in danger when she closes in on Adam’s secret.",
          production_code: "323",
          season_number: 3,
          show_id: 32798,
          still_path: "/pGu1psazdJUFPHrpoLXTkK4zVmf.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [],
          guest_stars: [
            {
              id: 82093,
              name: "Daniel Henney",
              credit_id: "57913c3d9251415fd8001bf9",
              character: "Michael Noshimuri",
              order: 167,
              gender: 2,
              profile_path: "/wwLWCVSP9la3dG6xQBqUd1YzwMh.jpg",
            },
          ],
        },
        {
          air_date: "2013-05-20",
          episode_number: 24,
          id: 770357,
          name: "Aloha. Malama Pono",
          overview:
            "When a plane lands on Oahu with four bodies on board and a missing terrorist detainee, the CIA tasks Five-0 with finding him before he carries out an attack on U.S. soil. Meanwhile, Kono is on the run from the police for a murder she did not commit, and McGarrett’s prison visit to Wo Fat ends with a shocking discovery.",
          production_code: "324",
          season_number: 3,
          show_id: 32798,
          still_path: "/1wVtEGXPvtGyTMiZJTAjXNcEH0O.jpg",
          vote_average: 10,
          vote_count: 1,
          crew: [],
          guest_stars: [
            {
              id: 82093,
              name: "Daniel Henney",
              credit_id: "57913c3d9251415fd8001bf9",
              character: "Michael Noshimuri",
              order: 167,
              gender: 2,
              profile_path: "/wwLWCVSP9la3dG6xQBqUd1YzwMh.jpg",
            },
          ],
        },
      ],
    },
  };
  const handleClickReferrer = () => console.log("handle click referrer");
  const tvId = 32798;
  beforeAll(() => {
    season = shallow(
      <Router>
        <Season
          season={seasonData}
          handleClickReferrer={handleClickReferrer}
          tvId={tvId}
        />
      </Router>
    );
  });

  it("should exists", () => {
    expect(season.exists()).toBe(true);
  });

  it("should be defined", () => {
    expect(season).toBeDefined();
  });

  it("should contain episodes length greater than 1", () => {
    expect(
      season.props().children.props.season.apiData.episodes.length
    ).toBeGreaterThan(1);
  });
});
