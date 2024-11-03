// --------------------------
// Section: Package Requirements
// --------------------------
const router = require("express").Router();

// --------------------------
// Section: Custom Utils Requirements
// --------------------------
const {
  limit10Req5Min,
  limit100Req15Min,
} = require("../../utils/requestLimit");

// --------------------------
// Section: Custom Middlewares
// --------------------------

// --------------------------
// Section: Connect to Databases
// --------------------------

// --------------------------
// Section: Routers
// --------------------------
// User Routers: /api/v1/users/...
const UsersRouter = require("./Users/UsersRouter");
router.use("/users", limit100Req15Min, UsersRouter);

// --------------------------
// Section: Exports
// --------------------------
module.exports = router;
