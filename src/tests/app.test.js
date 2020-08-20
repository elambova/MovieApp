import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import App from "../App";
import Header from "../Components/Header";
import Form from "../Components/Form";
import Footer from "../Components/Footer";
import ResultContainer from "../Components/ResultContainer";
import Movie from "../Components/SingleResult/Movie";
import Tv from "../Components/SingleResult/Tv";
import Person from "../Components/SingleResult/Person";
import Season from "../Components/SingleResult/Season";
import Episode from "../Components/SingleResult/Episode";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });
let app, result, movie, tv, person, season, episode;

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

const handleClickSeason = () => {
  console.log("handleClickSeason");
};

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

describe("App container", () => {
  beforeEach(() => {
    app = mount(<App />);
  });
  test("should be exists", () => {
    expect(app.exists()).toBe(true);
  });

  test("contents Header Component", () => {
    expect(app.find(Header)).toHaveLength(1);
  });

  test("contents Form component", () => {
    expect(app.find(Form)).toHaveLength(1);
  });

  test("contents Footer component", () => {
    expect(app.find(Footer)).toHaveLength(1);
  });

  test("contents ResultContainer Component", () => {
    result = shallow(
      <Router>
        <ResultContainer
          data={data}
          handleClickReferrer={handleClickReferrer}
          handleClickMovie={handleClickMovie}
          handleClickTv={handleClickTv}
          handleClickPerson={handleClickPerson}
        />
      </Router>
    );
    expect(result.exists()).toBe(true);
  });

  test("contents Movie component", () => {
    movie = shallow(
      <Router>
        <Movie movie={movieData} handleClickReferrer={handleClickReferrer} />
      </Router>
    );
    expect(movie.exists()).toBe(true);
  });

  test("contents Tv component", () => {
    tv = shallow(
      <Router>
        <Tv
          tv={tvData}
          handleClickReferrer={handleClickReferrer}
          handleClickSeason={handleClickSeason}
        />
      </Router>
    );
    expect(tv.exists()).toBe(true);
  });

  test("contents Person Component", () => {
    person = shallow(
      <Router>
        <Person
          person={personData}
          handleClickReferrer={handleClickReferrer}
          handleClickSeason={handleClickSeason}
        />
      </Router>
    );
    expect(person.exists()).toBe(true);
  });

  test("contents Season component", () => {
    season = shallow(
      <Router>
        <Season
          season={seasonData}
          tvId={32798}
          handleClickReferrer={handleClickReferrer}
        />
      </Router>
    );
    expect(season.exists()).toBe(true);
  });

  test("contents Episode component", () => {
    episode = shallow(
      <Router>
        <Episode
          episode={episodeData}
          tvId={32798}
          handleClickReferrer={handleClickReferrer}
        />
      </Router>
    );
    expect(episode.exists()).toBe(true);
  });
});
