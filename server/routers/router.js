const express = require("express");
const router = express.Router();

const {
  getHeaderData,
  postHeaderData,
} = require("../controllers/headerDataController");

router.route("/header").get(getHeaderData).post(postHeaderData);

const {
  getHeroData,
  postHeroData,
} = require("../controllers/heroDataController");

router.route("/hero").get(getHeroData).post(postHeroData);

const {
  getBrandsData,
  postBrandsData,
} = require("../controllers/brandsDataController");

router.route("/brands").get(getBrandsData).post(postBrandsData);

const {
  getFutureHereData,
  postFutureHereData,
} = require("../controllers/futureHereDataController");

router.route("/future-here").get(getFutureHereData).post(postFutureHereData);

const {
  getWhatIsGptData,
  postWhatIsGptData,
} = require("../controllers/whatIsGptDataController");

router.route("/what-is-gpt").get(getWhatIsGptData).post(postWhatIsGptData);

const {
  getEarlyAccessData,
  postEarlyAccessData,
} = require("../controllers/earlyAccessDataController");

router.route("/early_access").get(getEarlyAccessData).post(postEarlyAccessData);

const {
  getEarlyAccessCardData,
  postEarlyAccessCardData,
} = require("../controllers/earlyAccessCardDataController");

router.route("/early_access_card").get(getEarlyAccessCardData).post(postEarlyAccessCardData);

const {
  getExamplesData,
  postExamplesData,
} = require("../controllers/examplesDataController");

router.route("/examples").get(getExamplesData).post(postExamplesData);

const {
  getFooterData,
  postFooterData,
} = require("../controllers/footerDataController");

router.route("/footer").get(getFooterData).post(postFooterData);

module.exports = router;
