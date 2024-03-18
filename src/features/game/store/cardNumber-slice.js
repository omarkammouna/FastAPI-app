import { createSlice } from "@reduxjs/toolkit";

const cardNumberSlice = createSlice({
    name: 'cardNumber',
    initialState: { number: 2 },
    reducers: {
        selectTwo(state) {
            state.number = 2;
        },
        selectTwo(state) {
            state.number = 3;
        },
        selectTwo(state) {
            state.number = 4;
        }
    }
});
export const cardNumberActions = cardNumberSlice.actions;

export default cardNumberSlice;