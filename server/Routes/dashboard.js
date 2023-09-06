const router = require("express").Router();
const { userService } = require("..");
const authorization = require("../middleware/authorization");

router.get("/", authorization, async (req, res) => {
  try {
    const user = userService.getUser(req.user);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
