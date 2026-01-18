const isExamplesDataValid = require("../validators/isExamplesValid.js");

const {
  getExamplesDataModel,
  postExamplesDataModel,
} = require("../model/files/examplesDataModel");

const getExamplesData = (req, res, next) => {
  try {
    const data = getExamplesDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postExamplesData = (req, res, next) => {
  try {
    const data = req.body;

    isExamplesDataValid(data);

    postExamplesDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getExamplesData, postExamplesData };
