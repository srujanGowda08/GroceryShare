// server/src/controllers/lists/delete.js
const List = require("../../models/List");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const list = await List.findByIdAndDelete(id);
    if (!list) return res.status(404).json({ message: "List not found" });

    res.json({ message: "List deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
