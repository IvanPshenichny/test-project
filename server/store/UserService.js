const adminUserData = {
  firstname: "qwe",
  lastname: "qwe",
  email: "qwe@qwe.qwe",
  passwords: "$2b$10$FLlIt7nJ/xNeJM4m1vXRjOVkNkLVbkJTbfQFRhA/NU5pohP28OaHq",
};

class UserService {
  constructor() {
    this.usersMap = new Map(); // <email, {firstname, lastname, passwords}>
    this.usersMap.set(adminUserData.email, adminUserData);
  }

  addUser(userData) {
    const { email, ...restUserData } = userData;
    this.usersMap.set(email, restUserData);
    return userData;
  }

  checkEmailExist(email) {
    return this.usersMap.has(email);
  }

  removeUsers(email) {
    this.usersMap.delete(email);
  }

  updateUsersData(userData) {
    if (this.usersMap.has(userData.email)) {
      const { email, ...restUserData } = userData;
      this.usersMap.set(email, restUserData);
    }
  }

  getUser(email) {
    return this.usersMap.get(email);
  }
}

module.exports = UserService;
