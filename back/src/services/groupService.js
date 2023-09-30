const redisClient = require("../db/redis");

const getBreweries = async (longitude, latitude) => {
  try {
    const breweries = await redisClient.geoSearchWith(
      "brewery",
      { longitude, latitude },
      { radius: 5, unit: "km" },
      ["WITHDIST", "WITHCOORD"],
      { SORT: "ASC" }
    );
    return breweries;
  } catch (error) {
    throw error;
  }
};

const getFaculties = async (longitude, latitude) => {
  try {
    const faculties = await redisClient.geoSearchWith(
      "faculty",
      { longitude, latitude },
      { radius: 5, unit: "km" },
      ["WITHDIST", "WITHCOORD"],
      { SORT: "ASC" }
    );
    return faculties;
  } catch (error) {
    throw error;
  }
};

const getHealthCenters = async (longitude, latitude) => {
  try {
    const healthCenters = await redisClient.geoSearchWith(
      "health_center",
      { longitude, latitude },
      { radius: 5, unit: "km" },
      ["WITHDIST", "WITHCOORD"],
      { SORT: "ASC" }
    );
    return healthCenters;
  } catch (error) {
    throw error;
  }
};

const getPharmacies = async (longitude, latitude) => {
  try {
    const pharmacies = await redisClient.geoSearchWith(
      "pharmacy",
      { longitude, latitude },
      { radius: 5, unit: "km" },
      ["WITHDIST", "WITHCOORD"],
      { SORT: "ASC" }
    );
    return pharmacies;
  } catch (error) {
    throw error;
  }
};

const getSupermarkets = async (longitude, latitude) => {
  try {
    const supermarkets = await redisClient.geoSearchWith(
      "supermarket",
      { longitude, latitude },
      { radius: 5, unit: "km" },
      ["WITHDIST", "WITHCOORD"],
      { SORT: "ASC" }
    );
    return supermarkets;
  } catch (error) {
    throw error;
  }
};

const createMember = async (memberToCreate) => {
  const { group, member, longitude, latitude } = memberToCreate;
  try {
    const newMember = await redisClient.geoAdd(group, {
      longitude,
      latitude,
      member,
    });

    return newMember;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getBreweries,
  getFaculties,
  getHealthCenters,
  getPharmacies,
  getSupermarkets,
  createMember,
};
