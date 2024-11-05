// --------------------------
// Section: Package Requirements
// --------------------------
const apicache = require("apicache");

// --------------------------
// Section: Reponse Caching Modes (In-Memory Version)
// --------------------------
/* Define `cache` from `apicache` middleware */
const cache = apicache.middleware;
/* Options for `cache` function */
const onlyStatus200 = (req, res) => {
  return res.statusCode === 200;
};
/* In-Memory Reponse Caching Modes */
const cache5Minutes = cache("5 minutes");
const cache15Minutes = cache("15 minutes");
const cache5Minutes200Status = cache("5 minutes", onlyStatus200);

// --------------------------
// Section: Exports
// --------------------------
module.exports = { cache5Minutes, cache15Minutes, cache5Minutes200Status };
