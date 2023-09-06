const adminUserData = {
  firstname: "qwe",
  lastname: "qwe",
  email: "qwe@qwe.qwe",
  passwords: "$2b$10$FLlIt7nJ/xNeJM4m1vXRjOVkNkLVbkJTbfQFRhA/NU5pohP28OaHq",
};

class UserService {
  constructor() {
    this.usersMap = new Map();
    this.usersMap.set(adminUserData.email, adminUserData);
  }

  addUser(userData) {
    this.usersMap.set(userData.email, userData);
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
      this.usersMap.set(userData.email, userData);
    }
  }

  getUser(email) {
    return this.usersMap.get(email);
  }
}

module.exports = UserService;
