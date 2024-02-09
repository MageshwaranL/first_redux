import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0
};
const counterSlice=createSlice({
   
   name:'counter',
   initialState,
   reducers:{
      increment:(initialState)=>{initialState.count+=1},
      decrement:(initialState)=>{initialState.count-=1},
      reset:(initialState)=>{initialState.count=0},
      incrementbyamount:(initialState,action)=>{
        initialState.count+=action.payload;
      }
   }

});

export const {increment,decrement,reset,incrementbyamount}=counterSlice.actions;
export default counterSlice.reducer;