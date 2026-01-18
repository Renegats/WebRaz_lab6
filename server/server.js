require("dotenv").config();
const express = require("express");

const router = require("./routers/router");
const errorRouter = require("./routers/errorRouter");

const app = express();

app.use(express.json());

app.use("/api/cms", router);

app.use("*", errorRouter);

const APP_PORT = process.env.APP_PORT || 5000;

app.listen(APP_PORT, () => {
  console.log(`Server started on PORT: ${APP_PORT}`);
});
