const DataBase = require("../db");
const { removeUsers } = require("./queries");

const deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await DataBase.query(removeUsers, [id]);
    if (deleteuser.rows.length === 0) res.json("Users was deleted");
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
};

module.exports = deleteUsers;
