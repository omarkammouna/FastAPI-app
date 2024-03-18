import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './store/ui-slice';
import cartSlice from './store/cart-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;