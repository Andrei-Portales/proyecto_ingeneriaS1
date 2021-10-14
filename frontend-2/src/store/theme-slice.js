import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "LIGHT",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleTheme(state) {
      const curretnTheme = state.theme;

      if (curretnTheme === "LIGHT") {
        state.theme = "DARK";
      } else {
        state.theme = "LIGHT";
      }
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;
