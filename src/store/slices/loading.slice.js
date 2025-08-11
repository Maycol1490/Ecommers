import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: false, // false = no cargando
  reducers: {
    setLoading: (state, action) => action.payload, // true o false
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;