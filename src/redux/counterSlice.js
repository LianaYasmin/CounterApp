import { createSlice } from "@reduxjs/toolkit";

// createSlice() returns automatically reducer as well as action
export const counterSlice =createSlice({
    name:"counterApp",
    initialState:{
        value:0
    },
    // actions
    reducers:{
       increment:(state)=>{
           state.value+=1
       } ,
       decrement:(state)=>{
        state.value-=1
       },
       reset:(state)=>{
        state.value=0
       },
       changeRange:(state,action)=>{
        state.value+=action.payload
       }
    }
})
// actions are needed for components
export const {increment,decrement,reset,changeRange}=counterSlice.actions

// reducers are needed for store to update state
export default  counterSlice.reducer