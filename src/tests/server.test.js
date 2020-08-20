import app from "../../server/index";
import supertest from "supertest";

describe("Test Server", () => {
  let request;
  let server;

  beforeAll(() => {
    server = app.listen(5000);
    request = supertest(server);
  });

  afterAll(() => {
    server.close();
    console.log("Server CLOSE!");
  });

  test("should be defined", () => {
    expect(app).toBeDefined();
  });

  test("/getData", async () => {
    return await request.get("/getData?name=Matrix").expect((response) => {
      expect(response.status).toBe(200);
      expect(response.body.apiData[0].title).toMatch(new RegExp(/Matrix/gi));
    });
  });

  test("/getDataMovie", async () => {
    return await request.get("/getDataMovie?id=58").expect((response) => {
      expect(response.status).toBe(200);
      expect(response.body.apiData.title).toMatch(new RegExp(/Pirates/gi));
    });
  });

  test("/getDataTv", async () => {
    return await request.get("/getDataTv?id=32798").expect((response) => {
      expect(response.status).toBe(200);
      expect(response.body.apiData.name).toMatch(new RegExp(/five/gi));
    });
  });

  test("/getDataPerson", async () => {
    return await request.get("/getDataPerson?id=41297").expect((response) => {
      expect(response.status).toBe(200);
      expect(response.body.apiData.name).toMatch(new RegExp(/Alex/gi));
    });
  });
});
