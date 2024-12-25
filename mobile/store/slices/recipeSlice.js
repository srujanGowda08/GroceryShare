import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
  },
  reducers: {
    setRecipes(state, action) {
      state.recipes = action.payload;
    },
    addRecipe(state, action) {
      state.recipes.push(action.payload);
    },
  },
});

export const { setRecipes, addRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
