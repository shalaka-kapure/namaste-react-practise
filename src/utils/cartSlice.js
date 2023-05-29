import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mapping between action and reducer function
      state.items.push(action.payload); //data is pushed into action.payload when the action is dispatched
    },
    removeItem: (state, action) => {
        const index = action.payload;  
        state.items.splice(index, 1);
      },
      
    clearCart: (state) => {
      state.items = [];
    },
  },
}); 

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
