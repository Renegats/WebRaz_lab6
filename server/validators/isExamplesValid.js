const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isExamplesDataValid = (data) => {
  isObjectHasProps(data, ["examplesData"]);

  const { examplesData } = data;

  isObjectHasProps(examplesData, [
    "header",
    "second_header",
    "left_examples",
    "right_examples",
  ]);

  const { left_examples, right_examples } = examplesData;

  isArrayHasLength(left_examples);

  left_examples.forEach((item) =>
    isObjectHasProps(item, ["src", "alt", "data", "title", "href"])
  );

  isArrayHasLength(right_examples);

  right_examples.forEach((item) =>
    isObjectHasProps(item, ["src", "alt", "data", "title", "href"])
  );
};

module.exports = isExamplesDataValid;