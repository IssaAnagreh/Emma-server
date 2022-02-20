require("dotenv").config();
const express = require("express");
const apiRoutes = require("./src/routes/index");

const app = new express();

app.get("/", (req, res) => {
  res.send("Welcome to Quiz API");
});

app.use("/", apiRoutes);

app.listen(8080, () => {
  console.log("Server running at PORT " + (process.env.PORT || 8080));
});
