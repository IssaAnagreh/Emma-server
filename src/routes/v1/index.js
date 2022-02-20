const { Router } = require("express");
const bodyParser = require("body-parser");

const router = Router();

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const questionRoutes = require("./questions");
router.use("/questions", questionRoutes);

const AnswerRoutes = require("./answers");
router.use("/answers", AnswerRoutes);

module.exports = router;
