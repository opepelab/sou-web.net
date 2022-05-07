import { createSlice } from '@reduxjs/toolkit';

export interface RootState {
  darkSlice: ReturnType<typeof darkSlice.reducer>;
}
export const darkSlice = createSlice({
  name: 'ThemeToggle',
  initialState: {
    value: 'systemUI',
  },
  reducers: {
    dark: (state) => {
      state.value = 'dark';
    },
    light: (state) => {
      state.value = 'light';
    },
  },
});

export const { dark, light } = darkSlice.actions;
export default darkSlice.reducer;
