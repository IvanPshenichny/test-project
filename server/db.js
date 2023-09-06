const Pool = require("pg").Pool;

const DataBase = new Pool({
  user: "postgres",
  password: "12345",
  host: "localhost",
  port: 3002,
  database: "usersdata",
});

module.exports = DataBase;
