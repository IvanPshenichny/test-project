const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const UserService = require("./store/UserService");
const userService = new UserService();
module.exports = { userService };

const jwtAuth = require("./Routes/jwtAuth");
const dashboard = require("./Routes/dashboard");

const PORT = 3001;

app.use(express.json()); //req.body
app.use(cors());

app.use("/auth/", jwtAuth);
app.use("/dashboard", dashboard);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server has been started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
