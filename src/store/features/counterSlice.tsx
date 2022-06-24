import  { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            console.log(state)
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = initialState.count
        },
        incrementByAmount: (state,action) => {
            console.log(action)
            state.count += action.payload
        },
    }
});


export const {increment , decrement , reset , incrementByAmount} = counterSice.actions;


export default counterSice.reducer