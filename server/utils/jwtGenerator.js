const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(email) {
  return jwt.sign({ email }, process.env.jwtSecret, { expiresIn: "1d" });
}

module.exports = jwtGenerator;
