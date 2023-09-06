const DataBase = require("../db");
const { updateUsersData } = require("./queries");

const updateUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname } = req.body;
    const { lastname } = req.body;
    const updateusers = await DataBase.query(updateUsersData, [firstname, lastname, id]);
    res.json("Users was updated");
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
};




module.exports = updateUsers;

