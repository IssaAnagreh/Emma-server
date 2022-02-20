const { Router, json } = require("express");
const { ObjectId } = require("mongodb");
const client = require("../../../db");
const database = client.db(process.env.DB_NAME);

const router = Router();

router.get("/", async (request, response) => {
  try {
    const result = await database.collection("Answers").find({}).toArray();
    response.send({ status: 200, data: result });
  } catch (error) {
    return response.status(500).send(error.message);
  } finally {
  }
});

router.post("/", async (request, response) => {
  const Answers = database.collection("Answers");
  const Questions = database.collection("Questions");

  const { answers } = request.body;

  let insertedData = [];

  try {
    for (let i = 0; i < answers.length; i++) {
      const question = await Questions.findOne({
        _id: ObjectId(answers[i]?.questionId),
      });

      if (question) {
        insertedData.push({
          question: question?.text,
          answer: answers[i]?.answer,
        });
      } else {
        throw new Error("Invalid data");
      }
    }

    if (insertedData.length) {
      await Answers.insertOne({
        questions: insertedData,
        createdAt: new Date(),
      });
      return response.send({ status: 201 });
    }
  } catch (error) {
    return response.status(500).send(error.message);
  } finally {
  }
});

module.exports = router;
