import {createSlice} from "@reduxjs/toolkit"

export type CounterState = {
    counter : number;
}


const initialState: CounterState = {
    counter: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState : initialState,
    reducers: {
        increment:(state) => {state.counter +=1 }
    },
})

export const conuterActions = counterSlice.actions;

export const counterReducer = counterSlice.reducer