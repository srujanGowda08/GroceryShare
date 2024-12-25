// server/src/controllers/recipes/generate.js
const Recipe = require("../../models/Recipe");

module.exports = async (req, res) => {
  const { name, ingredients, instructions } = req.body;
  try {
    const recipe = new Recipe({
      name,
      ingredients,
      instructions,
      createdBy: req.user.id,
    });
    await recipe.save();

    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
