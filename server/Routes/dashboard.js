const router = require("express").Router();
const { userService } = require("..");
const authorization = require("../middleware/authorization");

router.get("/", authorization, async (req, res) => {
  try {
    console.log(req.email);
    const user = userService.getUser(req.email);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
