// To access the methods on the service object to perform CRUD operations on a table
const service = require("./service");

// Never blindly trust what the client is sending to your server! Make sure to use validation middleware.
const hasProperties = require("../errors/hasProperties");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// Checks request body for specified property, or properties values using "hasProperties()" middleware function
const hasRequiredProperties = hasProperties("");

// checks whether the request body contains a specified set of allowed fields. Update values to reflect your data
const VALID_PROPERTIES = ["name", "address", "phone", "email"];

function hasOnlyValidProperties(req, res, next) {
  const { data = {} } = req.body;

  const invalidFields = Object.keys(data).filter(
    (field) => !VALID_PROPERTIES.includes(field)
  );

  if (invalidFields.length) {
    return next({
      status: 400,
      message: `Invalid field(s): ${invalidFields.join(", ")}`,
    });
  }
  next();
}

// Sends a list of all data requested by user
async function list(req, res, next) {
  res.send("Hello World");
}

module.exports = {
  list: asyncErrorBoundary(list),
};
