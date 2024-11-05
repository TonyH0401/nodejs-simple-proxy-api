// --------------------------
// Section: Package Requirements
// --------------------------
const createError = require("http-errors");
const path = require("path");
const needle = require("needle");
const chalk = require("chalk");

// --------------------------
// Section: Custom Utils Requirements
// --------------------------

// --------------------------
// Section: Custom Middlewares
// --------------------------

// --------------------------
// Section: Constant Declarations
// --------------------------
const OPENWEATHER_API_BASE_URL = process.env.OPENWEATHER_API_BASE_URL || "";
const OPENWEATHER_API_KEY_NAME = process.env.OPENWEATHER_API_KEY_NAME || "";
const OPENWEATHER_API_KEY_VALUE = process.env.OPENWEATHER_API_KEY_VALUE || "";
const NODE_APP_ENV = process.env.NODE_APP_ENV || "";

// --------------------------
// Section: Import Models
// --------------------------

// --------------------------
// Section: Weathers Middlewares
// --------------------------
module.exports.validateWeatherEnvConfig = async (req, res, next) => {
  try {
    if (!OPENWEATHER_API_BASE_URL)
      return next(createError(404, "Config for weather URL not found!"));
    if (!OPENWEATHER_API_KEY_NAME)
      return next(createError(404, "Config for weather KEY_NAME not found!"));
    if (!OPENWEATHER_API_KEY_VALUE)
      return next(createError(404, "Config for weather KEY_VALUE not found!"));
    // if (!NODE_APP_ENV)
    //   return next(
    //     createError(404, "Missing application environment definition!")
    //   );
    return next();
  } catch (error) {
    return next(createError(500, error.message));
  }
};

module.exports.getWeatherByCityName = async (req, res, next) => {
  const { q } = req.query;
  try {
    if (!q)
      return next(
        createError(
          404,
          `Variable 'q' for city name geocode is missing or undefined!`
        )
      );
    const queryParams = new URLSearchParams({
      q: q,
      [OPENWEATHER_API_KEY_NAME]: OPENWEATHER_API_KEY_VALUE,
    });
    const fullUrl = `${OPENWEATHER_API_BASE_URL}?${queryParams.toString()}`;
    const openWeatherApiRes = await needle("get", fullUrl);
    if (openWeatherApiRes.statusCode >= 400)
      return next(
        createError(
          openWeatherApiRes.statusCode || 400,
          openWeatherApiRes.body.message || ""
        )
      );
    const data = openWeatherApiRes.body;
    if (NODE_APP_ENV !== "production")
      console.log(chalk.bgCyanBright.italic.bold(`REQUEST: ${fullUrl}`));
    return res.status(200).json({
      code: 1,
      success: true,
      message: `Received weather for: ${q}`,
      data: data,
    });
  } catch (error) {
    return next(createError(500, error.message));
  }
};
