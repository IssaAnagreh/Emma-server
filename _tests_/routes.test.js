const request = require("supertest");
const app = require("../index");
const client = require("../db");

beforeAll(async () => {
  await client.connect();
});

afterAll(async () => {
  await client.close();
});

describe("Get Questions Endpoint", () => {
  it("should fetch available questions", async () => {
    const response = await request(app).get("/api/v1/questions");
    expect(response.statusCode).toBe(200);
  });
});

describe("Post user Answers Endpoint with invalid data", () => {
  it("should post user answers with Error Invalid Data", async () => {
    const response = await request(app)
      .post("/api/v1/answers")
      .send({
        answers: [
          {
            questionId: "62117ce4ac881d0bb8733153",
            answer: "test@email.com",
          },
        ],
      });
    expect(response.statusCode).toBe(400);
  });

  it("should post user answers with Success", async () => {
    const response = await request(app)
      .post("/api/v1/answers")
      .send({
        answers: [
          {
            questionId: "62279777125ea86898f143e4",
            answer: "Female",
          },
        ],
      });
    expect(response.statusCode).toBe(200);
  });
});
