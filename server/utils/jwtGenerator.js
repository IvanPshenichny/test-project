const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(userData) {
  const payload = {
    user: userData,
  };

  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1d" });
}

module.exports = jwtGenerator;
