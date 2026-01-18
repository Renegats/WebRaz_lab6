const isEarlyAccessCardDataValid = require("../validators/isEarlyAccessCardDataValid");

const {
  getEarlyAccessCardDataModel,
  postEarlyAccessCardDataModel,
} = require("../model/files/earlyAccessCardDataModel");

const getEarlyAccessCardData = (req, res, next) => {
  try {
    const data = getEarlyAccessCardDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postEarlyAccessCardData = (req, res, next) => {
  try {
    const data = req.body;

    isEarlyAccessCardDataValid(data);

    postEarlyAccessCardDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getEarlyAccessCardData, postEarlyAccessCardData };
