import { configureStore } from '@reduxjs/toolkit';
import cardNumberSlice from './cardNumber-slice';
import setsSlice from './sets-slice';


import { addPlaceholder, replaceCard } from './placeholders-slice';
const store = configureStore({
  reducer: { cardNumber: cardNumberSlice.reducer, set: setsSlice.reducer },
});

export default store;





export const addPlaceholderAsync = () => (dispatch, getState) => {
  const { placeholders } = getState().placeholders;
  const newId = placeholders.length + 1; 
  dispatch(addPlaceholder({ id: newId }));
};

export const replaceCardAsync = (placeholderId, card) => async (dispatch) => {
  try {
    
    const response = await fetch('backend_endpoint_url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ placeholderId, card }),
    });
    if (!response.ok) {
      throw new Error('Failed to send data to the backend');
    }
    
    dispatch(replaceCard({ placeholderId, card }));
  } catch (error) {
    console.error('Error sending data to the backend:', error);
  }
};