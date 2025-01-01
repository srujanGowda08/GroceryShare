// server/src/controllers/auth/register.js
const User = require("../../models/User");

module.exports = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "Email already in use" });

    const user = new User({ email, password, name });
    await user.save();

    res.status(201).send ({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
