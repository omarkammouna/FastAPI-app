import { createSlice } from '@reduxjs/toolkit';

const setsSlice = createSlice({
  name: 'sets',
  initialState: {
    cards: [],
    number: 0,
  },
  reducers: {
    addCardToSet(state, action) {
      const newCard = action.payload;
      const existingCard = state.cards.find((card) => card.id === newCard.id);
      
    },
    removeCradFromSet(state, action) {
      const oldItem = action.payload;
      console.log(oldItem)
      const existingItem = state.items.find(item => item.id === oldItem);
      
    },
  },
});

export const setsActions = setsSlice.actions;

export default setsSlice;