const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isFutureHereDataValid = (data) => {
  isObjectHasProps(data, ["logoData", "menuData", "buttonsData"]);

  const { logoData, menuData, buttonsData } = data;

  isObjectHasProps(logoData, ["alt", "src", "href"]);

  isArrayHasLength(menuData);

  menuData.forEach((item) => isObjectHasProps(item, ["title", "href"]));

  isArrayHasLength(buttonsData);

  buttonsData.forEach((button) =>
    isObjectHasProps(button, ["title", "href", "isPrimary"])
  );
};

module.exports = isFutureHereDataValid;
