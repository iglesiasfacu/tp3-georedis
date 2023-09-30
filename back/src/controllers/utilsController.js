const utilsService = require("../services/utilsService");

const getDbSize = async (req, res) => {
  try {
    const dbSize = await utilsService.getDbSize();
    res.status(200).send({ status: "OK", data: dbSize });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllKeys = async (req, res) => {
  try {
    const allKeys = await utilsService.getAllKeys();
    res.status(200).send({ status: "OK", data: allKeys });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const dropDb = async (req, res) => {
  try {
    await utilsService.dropDb();
    res.status(200).send({ status: "OK", data: "DB has been deleted" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const initDb = async (req, res) => {
  try {
    const data = await utilsService.initDb();
    res.status(200).send({ status: "OK", data });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = { dropDb, getAllKeys, getDbSize, initDb };
