import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "lists",
  initialState: {
    items: [],
  },
  reducers: {
    setLists(state, action) {
      state.items = action.payload;
    },
    addList(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const { setLists, addList } = listSlice.actions;
export default listSlice.reducer;
