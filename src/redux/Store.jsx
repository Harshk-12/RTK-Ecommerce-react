import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './Slices/loginSlice'
import homeSlice from "./Slices/homeSlice";
import commonSlice from "./Slices/commonSlice";

export default configureStore({
    reducer:{
        login:loginSlice,
        home:homeSlice,
        common:commonSlice
    }}
    
)

