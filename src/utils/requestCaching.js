// --------------------------
// Section: Package Requirements
// --------------------------
const apicache = require("apicache");

// --------------------------
// Section: in
// --------------------------
const cache = apicache.middleware;
const cache5Minutes = cache("5 minutes");
const cache15Minutes = cache("15 minutes");

// --------------------------
// Section: Exports
// --------------------------
module.exports = { cache5Minutes, cache15Minutes };
