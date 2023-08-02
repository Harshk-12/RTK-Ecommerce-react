import { createSlice } from "@reduxjs/toolkit";

let loginSlice=createSlice({
    name:'login',
    initialState:{loginname:'',loginpassword:''},
    reducers:{
       setloginname:(state,action)=>{
        state.loginname=action.payload
       },
       setloginpassword:(state,action)=>{
        state.loginpassword=action.payload
       },

    }
})
export const {setloginname,setloginpassword} =loginSlice.actions
export default loginSlice.reducer
