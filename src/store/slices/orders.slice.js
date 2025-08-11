import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
      // Guardar en localStorage
      localStorage.setItem("orders", JSON.stringify(state));
    },
    setOrders: (state, action) => {
      return action.payload;
    }
  }
});

export const { addOrder, setOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
