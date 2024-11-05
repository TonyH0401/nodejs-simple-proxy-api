// --------------------------
// Section: Package Requirements
// --------------------------
const router = require("express").Router();
const createError = require("http-errors");

// --------------------------
// Section: Custom Utils Requirements
// --------------------------
const {
  cache5Minutes,
  cache15Minutes,
  cache5Minutes200Status,
} = require("../../../utils/requestCaching");

// --------------------------
// Section: Custom Middlewares
// --------------------------

// --------------------------
// Section: Weathers Middlewares
// --------------------------
const {
  validateWeatherEnvConfig,
  getWeatherByCityName,
} = require("./WeathersMiddleware");

// --------------------------
// Section: Weathers Routers
// --------------------------
router.route("/").get((req, res) => {
  return res.status(200).json({
    code: 1,
    success: true,
    message: "Default branch 🥚 of /weathers! ",
  });
});
router
  .route("/get-weather")
  .get(validateWeatherEnvConfig, cache5Minutes200Status, getWeatherByCityName);

// --------------------------
// Section: Weathers Error Handlers
// --------------------------
router
  .use((req, res, next) => {
    next(createError(404, "This /weathers directory does not exist!"));
  })
  .use((err, req, res, next) => {
    let errorStatus = err.status || 404;
    let errorMessage = err.message || "";
    return res.status(errorStatus).json({
      code: 0,
      success: false,
      message: errorMessage,
    });
  });

// --------------------------
// Section: Exports
// --------------------------
module.exports = router;
