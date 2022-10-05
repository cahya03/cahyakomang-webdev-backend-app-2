const express = require("express");
const router = express.Router();

router.use("/data", require("./data.routes"));
module.exports = router;