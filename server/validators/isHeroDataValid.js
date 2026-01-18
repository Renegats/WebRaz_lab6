const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isFutureHereDataValid = (data) => {
  isObjectHasProps(data, [
    "header",
    "description",
    "heroCtaButtons",
    "illustration",
  ]);

  const { heroCtaButtons, illustration } = data;

  isArrayHasLength(heroCtaButtons);

  heroCtaButtons.forEach((item) => isObjectHasProps(item, ["title", "type"]));

  isObjectHasProps(illustration, ["alt", "src"]);
};

module.exports = isFutureHereDataValid;
