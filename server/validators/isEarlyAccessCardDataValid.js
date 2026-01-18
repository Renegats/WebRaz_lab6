const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isEarlyAccessCardDataValid = (data) => {
  isObjectHasProps(data, ["earlyAccessCardData"]);

  const { earlyAccessCardData } = data;

  isObjectHasProps(earlyAccessCardData, [
    "upper_header",
    "header",
    "btn",
  ]);

  const { btn } = earlyAccessCardData;

  isObjectHasProps(btn, ["title"]);
};

module.exports = isEarlyAccessCardDataValid;