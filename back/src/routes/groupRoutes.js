const express = require("express");
const router = express.Router();
const groupController = require("../controllers/groupController");

router
  .get("/breweries", groupController.getBreweries)
  .get("/faculties", groupController.getFaculties)
  .get("/health-centers", groupController.getHealthCenters)
  .get("/pharmacies", groupController.getPharmacies)
  .get("/supermarkets", groupController.getSupermarkets)
  .get("/groups", groupController.getAllGroups)
  .post("/member", groupController.createMember);

module.exports = router;
