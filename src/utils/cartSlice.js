import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    itemTotalQuantity: 0,
    itemTotalAmount:0,
  },
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.card.info.id === action.payload.card.info.id);
    
      if (itemIndex >= 0) {
        state.items = state.items.map((item, index) => {
          if (index === itemIndex) {
            return { ...item, ItemQuantity: item.ItemQuantity + 1 };
          }
          return item;
        });
      } else {
        const tempItem = { ...action.payload, ItemQuantity: 1 };
        state.items.push(tempItem);
        state.itemTotalAmount += action.payload.card.info.price / 100;
      }
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
     
      return { items: [] }; 
    },
    },
  
});

export const { addItem, removeItem, clearCart, getTotals} = cartSlice.actions;

export default cartSlice.reducer;


