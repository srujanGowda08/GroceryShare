const Recipe = require("../models/Recipe");

module.exports = {
  createRecipe: async (data) => {
    const recipe = new Recipe(data);
    return await recipe.save();
  },

  getRecipesByUser: async (userId) => {
    return await Recipe.find({ createdBy: userId });
  },

  deleteRecipe: async (recipeId) => {
    return await Recipe.findByIdAndDelete(recipeId);
  },
};
