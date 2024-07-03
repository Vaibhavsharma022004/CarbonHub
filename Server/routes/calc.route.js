const express = require("express");
const { calc , sustain } = require("../controllers/calc.controller");

const router = express.Router();

router.post("/cal",calc);

module.exports = router;