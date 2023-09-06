const jwt = require('jsonwebtoken');
require('dotenv').config();

function jwtGenerator(userprivat_id) {
    const payload = {
        user: userprivat_id
    }

    return jwt.sign(payload, process.env.jwtSecret, {expiresIn: "1d"})
}

module.exports = jwtGenerator;