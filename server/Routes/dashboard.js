const router = require("express").Router();
const DataBase = require("../db");
const authorization = require("../middleware/authorization");
const { getUser } = require("./queries");

router.get("/", authorization, async (req, res) => {
  try {
    // req.user has the payload
    //res.json(req.user);

    const user = await DataBase.query(getUser, [req.user]);
    res.json(user.rows[0])
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
}); 

module.exports = router;
 