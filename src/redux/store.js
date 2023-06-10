// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Добавьте другие reducer-ы, если есть
  },
});

export default store;
