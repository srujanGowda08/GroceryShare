import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import listSlice from "./slices/listSlice";
import recipeSlice from "./slices/recipeSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    lists: listSlice,
    recipes: recipeSlice,
  },
});

export default store;
