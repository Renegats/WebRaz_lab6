const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isBrandsDataValid = (data) => {
  const arrayLength = isArrayHasLength(data);

  if (!arrayLength)
    throw new Error("Переданные данные - не массив или длина = 0");

  data.forEach((obj) => isObjectHasProps(obj, ["src", "alt"]));
};

module.exports = isBrandsDataValid;
