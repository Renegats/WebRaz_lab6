const isWhatIsGptDataValid = require("../validators/isWhatIsGptDataValid");

const {
  getWhatIsGptDataModel,
  postWhatIsGptDataModel,
} = require("../model/files/whatIsGptDataModel");

const getWhatIsGptData = (req, res, next) => {
  try {
    const data = getWhatIsGptDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postWhatIsGptData = (req, res, next) => {
  try {
    const data = req.body;

    isWhatIsGptDataValid(data);

    postWhatIsGptDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getWhatIsGptData, postWhatIsGptData };
