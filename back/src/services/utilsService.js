const redisClient = require("../db/redis");

const getDbSize = async () => {
  try {
    return redisClient.dbSize();
  } catch (error) {
    throw error;
  }
};

const getAllKeys = async () => {
  try {
    return redisClient.keys("*");
  } catch (error) {
    throw error;
  }
};

const dropDb = async () => {
  try {
    await redisClient.flushDb();
  } catch (error) {
    throw error;
  }
};

const initDb = async () => {
  try {
    const dbsize = await redisClient.dbSize();
    if (!dbsize) {
      //breweries
      redisClient.geoAdd("brewery", {
        longitude: -32.4811775,
        latitude: -58.2401453,
        member: "Tractor",
      });
      redisClient.geoAdd("brewery", {
        longitude: -32.480575,
        latitude: -58.2361143,
        member: "Drakkar",
      });
      redisClient.geoAdd("brewery", {
        longitude: -32.4799457,
        latitude: -58.2375203,
        member: "7 Colinas",
      });

      //faculties
      redisClient.geoAdd("faculty", {
        longitude: -32.479084,
        latitude: -58.2356481,
        member: "UADER FCyT",
      });
      redisClient.geoAdd("faculty", {
        longitude: -32.4815978,
        latitude: -58.229692,
        member: "UCU",
      });
      redisClient.geoAdd("faculty", {
        longitude: -32.4958,
        latitude: -58.2318001,
        member: "UTN",
      });

      //pharmacies
      redisClient.geoAdd("pharmacy", {
        longitude: -32.4838954,
        latitude: -58.2474852,
        member: "Farmacia San Roque",
      });
      redisClient.geoAdd("pharmacy", {
        longitude: -32.4838954,
        latitude: -58.2474852,
        member: "Farmacia Vitamina",
      });
      redisClient.geoAdd("pharmacy", {
        longitude: -32.4807282,
        latitude: -58.2357882,
        member: "Farmacia Entre Ríos",
      });

      //health centers
      redisClient.geoAdd("health_center", {
        longitude: -32.4712792,
        latitude: -58.2705682,
        member: "Centro Integrador Comunitario",
      });
      redisClient.geoAdd("health_center", {
        longitude: -32.4812832,
        latitude: -58.2632772,
        member: "Hospital Urquiza",
      });
      redisClient.geoAdd("health_center", {
        longitude: -32.4834228,
        latitude: -58.2324678,
        member: "Clinica Uruguay",
      });

      //supermarkets
      redisClient.geoAdd("supermarket", {
        longitude: -32.4807123,
        latitude: -58.2618993,
        member: "El Guri",
      });
      redisClient.geoAdd("supermarket", {
        longitude: -32.4891777,
        latitude: -58.2324794,
        member: "Gran Rex",
      });
      redisClient.geoAdd("supermarket", {
        longitude: -32.4863167,
        latitude: -58.2326263,
        member: "Supremo",
      });
      return "DB initialized!";
    }

    return "DB has already been initialized";
  } catch (error) {
    throw error;
  }
};

module.exports = { dropDb, getDbSize, getAllKeys, initDb };
