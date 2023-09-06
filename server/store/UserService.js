const getAllUsers =
  "SELECT firstname, lastname, id, email, passwords FROM UserAuthData";
const getUserById = "SELECT * FROM UserAuthData WHERE id = $1";
const addUsers =
  "INSERT INTO UserAuthData (firstname, lastname, email, passwords) VALUES ($1, $2, $3, $4) RETURNING *";
const checkEmailExist = "SELECT * FROM UserAuthData WHERE email = $1";
const removeUsers = "DELETE FROM UserAuthData WHERE id = $1 ";
const updateUsersData =
  "UPDATE UserAuthData SET  firstname =$1,lastname =$2 WHERE id =$3";
const getUser =
  "SELECT firstname, lastname, email FROM UserAuthData WHERE id = $1";
const getId = "SELECT id FROM UserAuthData";
const addExtraInfo =
  "UPDATE UserAuthData SET statusi =$1 WHERE id =$2 RETURNING *";

class UserService {
  constructor() {
    this.usersMap = new Map(); // <email, {firstname, lastname, password}>
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(id) {
    return this.usersMap.get(id);
  }

  addUsers(userData) {
    const { email, ...restUserData } = userData;
    this.usersMap.set(email, restUserData);
  }

  checkEmailExist(email) {
    return this.usersMap.has(email)
  }

  removeUsers(email) {
    this.usersMap.delete(email)
  }

  updateUsersData() {
    
  }
}
