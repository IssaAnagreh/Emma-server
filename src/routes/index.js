const { Router } = require("express");
const v1Routes = require("./v1/index");

const router = Router();

router.use("/api/v1", v1Routes);

module.exports = router;
