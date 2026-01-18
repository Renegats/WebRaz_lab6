const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isEarlyAccessDataValid = (data) => {
  isObjectHasProps(data, ["earlyAccessData"]);

  const { earlyAccessData } = data;

  isObjectHasProps(earlyAccessData, [
    "my_apps",
    "before_header",
    "header",
    "description",
  ]);

  const { my_apps, description } = earlyAccessData;

  isObjectHasProps(my_apps, ["src", "alt"]);

  isObjectHasProps(description, ["description", "href"]);
};

module.exports = isEarlyAccessDataValid;