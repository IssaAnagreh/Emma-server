require("dotenv").config();
const { Router } = require("express");
const client = require("../../../db");
const database = client.db(process.env.DB_NAME);

const router = Router();

router.get("/", async (request, response) => {
  try {
    const result = await database.collection("Questions").find({}).toArray();
    response.send({ status: 200, data: result });
  } catch (error) {
    return response.status(500).send(error.message);
  } finally {
  }
});

module.exports = router;
