const groupService = require("../services/groupService");
const utilsService = require("../services/utilsService");

const getBreweries = async (req, res) => {
  const { lon, lat } = req.query;

  if (!lon || !lat) {
    res.status(400).send({
      status: "FAILED",
      data: "Longitude and latitude are required",
    });
  }

  const longitude = Number(lon);
  const latitude = Number(lat);

  try {
    const data = await groupService.getBreweries(longitude, latitude);
    res.status(200).send({ status: "OK", data });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getFaculties = async (req, res) => {
  const { lon, lat } = req.query;

  if (!lon || !lat) {
    res.status(400).send({
      status: "FAILED",
      data: "Longitude and latitude are required",
    });
  }

  const longitude = Number(lon);
  const latitude = Number(lat);

  try {
    const data = await groupService.getFaculties(longitude, latitude);
    res.status(200).send({ status: "OK", data });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getHealthCenters = async (req, res) => {
  const { lon, lat } = req.query;

  if (!lon || !lat) {
    res.status(400).send({
      status: "FAILED",
      data: "Longitude and latitude are required",
    });
  }

  const longitude = Number(lon);
  const latitude = Number(lat);

  try {
    const data = await groupService.getHealthCenters(longitude, latitude);
    res.status(200).send({ status: "OK", data });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getPharmacies = async (req, res) => {
  const { lon, lat } = req.query;

  if (!lon || !lat) {
    res.status(400).send({
      status: "FAILED",
      data: "Longitude and latitude are required",
    });
  }

  const longitude = Number(lon);
  const latitude = Number(lat);

  try {
    const data = await groupService.getPharmacies(longitude, latitude);
    res.status(200).send({ status: "OK", data });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getSupermarkets = async (req, res) => {
  const { lon, lat } = req.query;

  if (!lon || !lat) {
    res.status(400).send({
      status: "FAILED",
      data: "Longitude and latitude are required",
    });
  }

  const longitude = Number(lon);
  const latitude = Number(lat);

  try {
    const data = await groupService.getSupermarkets(longitude, latitude);
    res.status(200).send({ status: "OK", data });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllGroups = async (req, res) => {
  const { lon, lat } = req.query;

  if (!lon || !lat) {
    res.status(400).send({
      status: "FAILED",
      data: "Longitude and latitude are required",
    });
  }

  const longitude = Number(lon);
  const latitude = Number(lat);

  try {
    const breweries = await groupService.getBreweries(longitude, latitude);
    const faculties = await groupService.getFaculties(longitude, latitude);
    const health_centers = await groupService.getHealthCenters(
      longitude,
      latitude
    );
    const pharmacies = await groupService.getPharmacies(longitude, latitude);
    const supermarkets = await groupService.getSupermarkets(
      longitude,
      latitude
    );

    res.status(200).send({
      status: "OK",
      data: {
        breweries,
        faculties,
        health_centers,
        pharmacies,
        supermarkets,
      },
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createMember = async (req, res) => {
  const { group, member, longitude, latitude } = req.body;

  if (!group || !member || !longitude || !latitude) {
    res.status(400).send({
      status: "FAILED",
      data: "All fields are required",
    });
  }
  const allKeys = await utilsService.getAllKeys();
  const filteredKey = allKeys.filter((key) => key === group);
  if (!filteredKey.length) {
    res.status(400).send({
      status: "FAILED",
      data: "Group does not exist",
    });
  }

  const newMember = { group, member, longitude, latitude };

  try {
    const data = await groupService.createMember(newMember);
    if (data) {
      res
        .status(200)
        .send({ status: "OK", data: "Member created successfully" });
    } else {
      res.status(400).send({
        status: "FAILED",
        data: "Member already exists",
      });
    }
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getBreweries,
  getFaculties,
  getHealthCenters,
  getPharmacies,
  getSupermarkets,
  getAllGroups,
  createMember,
};
