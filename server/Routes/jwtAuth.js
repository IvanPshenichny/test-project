const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validinfo");
const authorization = require("../middleware/authorization");
const { userService } = require("../index");

// register route
router.post("/register", validInfo, async (req, res) => {
  try {
    // step 1. destructure the req.body (name, email, password)
    const { firstname, lastname, email, passwords } = req.body;

    // step 2. check if user exist (if user exist then throw error)
    const exist = userService.checkEmailExist(email);
    if (exist) {
      return res.status(401).send("User already exist");
    }

    // step 3. encrypt user password
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const encryptedPassword = await bcrypt.hash(passwords, salt);

    // step 4. save user to database
    const newUser = userService.addUser({
      firstname,
      lastname,
      email,
      passwords: encryptedPassword,
    });

    // step 5. generating our jwt token
    const token = jwtGenerator(newUser.email);
    return res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

// login route
router.post("/login", validInfo, async (req, res) => {
  try {
    // 1 step. destructure the req.body
    const { email, passwords } = req.body;

    //2 step. check if user doesnt exist (if not then we throw error)
    const user = userService.getUser(email);
    if (!user) {
      return res.status(401).json("Password or Email is incorrect");
    }

    console.log(passwords, user.passwords);

    // 3 step check if incomming password is the same the database password
    const validPassword = await bcrypt.compare(passwords, user.passwords);
    if (!validPassword) {
      return res.status(401).json("Password or Email is incorrect");
    }

    //4. give them the jwt token
    const token = jwtGenerator(user.email);
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
