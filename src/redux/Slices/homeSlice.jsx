import { createSlice } from "@reduxjs/toolkit";

import { fetchdata1, searchdata } from "../Actions/Action";

let homeSlice=createSlice({
    name:'home',
    initialState:{ 
        error:null,
        catergoryparams:null,
        data:[],
        currentpost:[],
        currentpage:1,
        isloading:false,
        pages:[],
        data2:[]

    },
    reducers:{
        Setcurrentpost:(state,action)=>{
    state.currentpost=action.payload
        },
        setcurrentpage:(state,action)=>{
            state.currentpage=action.payload
        //   console.log(state.pages,'000')

        },
        setpages:(state)=>{
            state.pages=[]
        for (let i = 1; i <= Math.ceil((state.data).length / 8); i++) {
              state.pages.push(i)
            //   console.log(state.pages,'33')
          }
        }

     
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchdata1.pending,(state,action)=>{
        state.isloading=true
        // console.log('laoding')
        })
        .addCase(fetchdata1.fulfilled,(state,action)=>{
            state.isloading=false
           state.data=action.payload
            
    })
    .addCase(fetchdata1.rejected,(state,action)=>{
         state.error=action.error.message
        //  state.isloading=false
    })
    .addCase(searchdata.fulfilled,(state,action)=>{
        state.data2=action.payload
        // console.log(state.data2,'9')
       
    })
}
})
export const {Setcurrentpost,setcurrentpage,setpages} =homeSlice.actions
export default homeSlice.reducer
