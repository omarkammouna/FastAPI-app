import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  placeholders: [],
};

const placeholdersSlice = createSlice({
  name: 'placeholders',
  initialState,
  reducers: {
    addPlaceholder: (state, action) => {
      state.placeholders.push({
        id: action.payload.id,
        card: null,
      });
    },
    replaceCard: (state, action) => {
      const { placeholderId, card } = action.payload;
      const placeholder = state.placeholders.find(p => p.id === placeholderId);
      if (placeholder) {
        placeholder.card = card;
      }
    },
  },
});

export const { addPlaceholder, replaceCard } = placeholdersSlice.actions;

export default placeholdersSlice.reducer;
