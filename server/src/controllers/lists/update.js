// server/src/controllers/lists/update.js
const List = require("../../models/List");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name, items } = req.body;
  try {
    const list = await List.findByIdAndUpdate(
      id,
      { name, items },
      { new: true }
    );
    if (!list) return res.status(404).json({ message: "List not found" });

    res.json(list);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
