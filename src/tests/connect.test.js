import * as connect from "../ConnectionAPI/connect";
import supertest from "supertest";
import fetch from "node-fetch";
global.fetch = fetch;

describe("Test ConnectAPI/connect", () => {
  //   const allData = {};
  //   const dataMovie = {};
  //   const dataTv = {};
  //   const dataPerson = {};
  //   const dataSeason = {};
  //   const dataEpisode = {};

  it("should be defined all", () => {
    expect(connect.getData).toBeDefined();
    expect(connect.getDataMovie).toBeDefined();
    expect(connect.getDataTv).toBeDefined();
    expect(connect.getDataPerson).toBeDefined();
    expect(connect.getDataSeason).toBeDefined();
    expect(connect.getDataEpisode).toBeDefined();
  });

  it("Should be media_type movie", async () => {
    return await connect
      .getData("Matrix")
      .then((data) => {
        expect(data.apiData[0].media_type).toBe("movie");
      })
      .catch((err) => console.error(err));
  });

  it("Should be media_type tv", async () => {
    return await connect
      .getData("Hawaii Five 0")
      .then((data) => {
        expect(data.apiData[0].media_type).toBe("tv");
      })
      .catch((err) => console.error(err));
  });

  it("Should be media_type person", async () => {
    return await connect
      .getData("Alex O'loughlin")
      .then((data) => {
        expect(data.apiData[0].media_type).toBe("person");
      })
      .catch((err) => console.error(err));
  });

  it("Title should be Pirates for Pirates of the Caribbean Movie", async () => {
    return await connect
      .getDataMovie(22)
      .then((data) => {
        expect(data.apiData.title).toMatch(new RegExp(/Pirates/gi));
      })
      .catch((err) => console.error(err));
  });

  it("Number_if_seasons should be toBeGreaterThanOrEqual than 5 for Hawaii Five 0 Tv Show", async () => {
    return await connect
      .getDataTv(32798)
      .then((data) => {
        expect(data.apiData.number_of_seasons).toBeGreaterThanOrEqual(8);
      })
      .catch((err) => console.error(err));
  });

  it("Known_for_department should be Acting for person Alex O'loughlin", async () => {
    return await connect
      .getDataPerson(41297)
      .then((data) => {
        expect(data.apiData.known_for_department).toBe("Acting");
      })
      .catch((err) => console.error(err));
  });

  it("Episodes should be toBeGreaterThan than 15 for Hawaii Five 0 Tv Show", async () => {
    return await connect
      .getDataSeason(32798, 4)
      .then((data) => {
        expect(data.apiData.episodes.length).toBeGreaterThan(15);
      })
      .catch((err) => console.error(err));
  });

  it("Still_path should not be Null for Hawaii Five 0 Tv Show", async () => {
    return await connect
      .getDataSeason(32798, 4, 15)
      .then((data) => {
        expect(data.apiData.still_path).not.toBeNull();
      })
      .catch((err) => console.error(err));
  });
});
