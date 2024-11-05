// --------------------------
// Section: Package Requirements
// --------------------------
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const chalk = require("chalk");

// --------------------------
// Section: Custom Utils Requirements
// --------------------------
const { limit10Req5Min, limit100Req15Min } = require("./utils/requestLimit");
const { reqLoggerTiny, reqLoggerDev } = require("./utils/requestLogger");

// --------------------------
// Section: Environment Variables
// --------------------------
const port = process.env.BE_PORT || 8080;

// --------------------------
// Section: Initialize NodeJS-ExpressJS Application
// --------------------------
const app = express();

// --------------------------
// Section: Application-wide Settings
// --------------------------
app.set("trust proxy", 1); // this Express app is a proxy server, it tells this app to trust the header values of the previous proxy

// --------------------------
// Section: Application Usage Functions
// --------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(reqLoggerDev);

// --------------------------
// Section: Default Router(s)
// --------------------------
app.get("/", limit100Req15Min, (req, res) => {
  return res.status(200).json({
    code: 1,
    success: true,
    message: "Welcome, this is the application's default branch!👋",
  });
});

// --------------------------
// Section: API Versioning Router(s)
// --------------------------
// API V1 Routers: /api/v1/...
const v1API = require("./api/v1/routes");
app.use("/api/v1", v1API);

// --------------------------
// Section: Default Error Handlers
// --------------------------
app.use((req, res, next) => {
  next(createError(404, "This directory does not exist!⛔"));
});
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  return res.status(404).json({
    code: 0,
    success: false,
    message: err.message || "",
  });
});

// --------------------------
// Section: Initialize Application Server
// --------------------------
app.listen(port, () => {
  console.log(
    chalk.whiteBright.bgGreen.bold(
      `> API is running 🚀 at http://localhost:${port}`
    )
  );
});
