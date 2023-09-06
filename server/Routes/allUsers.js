const DataBase = require("../db");
const { getAllUsers } = require("./queries");

const allUsers = async (req, res) => {
  try {
    const user = await DataBase.query(getAllUsers);
    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
};

module.exports = allUsers;
