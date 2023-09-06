const controller = require("./controller");
const router = require("express").Router();
const DataBase = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validinfo");
const authorization = require("../middleware/authorization");
const { addUsers, checkEmailExist } = require("./queries");

//registering route
router.post("/register", validInfo, async (req, res) => {
  try {
    // step 1. destructure the req.body (name, email, password)
    const { firstname, lastname, email, passwords } = req.body;

    // step 2. check if user exist (if user exist then throw error)
    const user = await DataBase.query(
      checkEmailExist, [email]
    );
    if (user.rows.length !== 0) {
      return res.status(401).send('User already exist');
    }

    // step 3. ???bcrypt??? the user password
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(passwords, salt);

    // step 4. enter the new inside our database
    const newUser = await DataBase.query(
      addUsers,
      [firstname, lastname, email, bcryptPassword]
    );

    // step 5. generating our jwt token
    const token = jwtGenerator(newUser.rows[0].id);
    return res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
});

router.get("/", controller.getUsers);
router.get("/", controller.getUsers);
// router.get("/:id", controller.getUsersById);

// router.put("/:id", controller.updateUser);
router.delete("/:firstname", controller.deleteUsers);
// router.get("/auth");

//login route
router.post("/login", validInfo, async (req, res) => {
  try {
    // 1 step. destructure the req.body
    const { email, passwords } = req.body;

    //2 step. check if user doesnt exist (if not then we throw error)
    const user = await DataBase.query(
      checkEmailExist,
      [email]
    );
    if (user.rows.length === 0) {
      return res.status(401).json("Password or Email is incorrect");
    }

    // 3 step check if incomming password is the same the database password
    const validPassword = await bcrypt.compare(
      passwords,
      user.rows[0].passwords
    );
    if (!validPassword) {
      return res.status(401).json("Password or Email is incorrect");
    }
    //4. give them the jwt token
    const token = jwtGenerator(user.rows[0].id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/is-verify", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
