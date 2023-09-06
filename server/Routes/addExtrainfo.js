const DataBase = require("../db");
const { addExtraInfo } = require("./queries");

const addExtraInformation = async (req, res) => {
  try {
    const { id } = req.params;
    const { statusi } = req.body;
    const addextrainfo = await DataBase.query(addExtraInfo, [statusi, req.user]);
    res.json("Users was updated");
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
};

module.exports = addExtraInformation;
