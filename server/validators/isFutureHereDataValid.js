const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isFutureHereDataValid = (data) => {
  const arrayLength = isArrayHasLength(data);

  if (!arrayLength)
    throw new Error("Переданные данные - не массив или длина массива = 0");

  data.forEach((obj) => isObjectHasProps(obj, ["title", "description"]));
};

module.exports = isFutureHereDataValid;
