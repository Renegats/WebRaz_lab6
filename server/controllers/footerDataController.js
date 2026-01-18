const isFooterDataValid = require("../validators/isFooterDataValid");

const {
  getFooterDataModel,
  postFooterDataModel,
} = require("../model/files/footerDataModel");

const getFooterData = (req, res, next) => {
  try {
    const data = getFooterDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postFooterData = (req, res, next) => {
  try {
    const data = req.body;

    isFooterDataValid(data);

    postFooterDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getFooterData, postFooterData };
