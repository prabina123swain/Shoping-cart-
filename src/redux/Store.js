import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from './Slices/CartSlics';

export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
    }
});