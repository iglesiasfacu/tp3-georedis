const express = require("express");
const router = express.Router();
const utilsController = require("../controllers/utilsController");

router
  .get("/keys", utilsController.getAllKeys)
  .get("/dbsize", utilsController.getDbSize)
  .post("/initdb", utilsController.initDb)
  .post("/dropdb", utilsController.dropDb);

module.exports = router;
