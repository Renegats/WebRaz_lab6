const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isFooterDataValid = (data) => {
  isObjectHasProps(data, ["footerData"]);

  const { footerData } = data;

  isObjectHasProps(footerData, ["header", "href", "columns"]);

  const { columns } = footerData;

  isArrayHasLength(columns);

  columns.forEach((column) =>
    isObjectHasProps(column, ["header", "links", "href"])
  );

  columns.forEach((column) => {
    isArrayHasLength(column.links);
  });
};

module.exports = isFooterDataValid;