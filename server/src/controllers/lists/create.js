// server/src/controllers/lists/create.js
const List = require("../../models/List");

module.exports = async (req, res) => {
  const { name, items } = req.body;
  try {
    const list = new List({
      name,
      owner: req.user.id,
      items,
    });
    await list.save();

    res.status(201).json(list);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
