// server/src/utils/auth.service.js
const bcrypt = require("bcryptjs");

module.exports = {
  hashPassword: async (password) => {
    return await bcrypt.hash(password, 10);
  },

  comparePassword: async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
  },
};
