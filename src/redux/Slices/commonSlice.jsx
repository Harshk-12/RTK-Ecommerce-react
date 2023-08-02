import { createSlice } from "@reduxjs/toolkit";


let commonSlice = createSlice({
  name: "common",
  initialState: {
    // counter:0,  
    counter:localStorage.getItem('cartvalue')?JSON.parse(localStorage.getItem("cartvalue")).length:0,  
    totalamount: 0,
    subtotal: 0,
    // cartindex: localStorage.getItem("cartvalue")===''?[]:JSON .parse(localStorage.getItem("cartvalue")),
    cartindex: localStorage.getItem("cartvalue")?JSON.parse(localStorage.getItem("cartvalue")):[],
    searchvalue:'',
    filterdata:[],
    username:'',
    password:'',
    setsubtotal:0,
    totalamount:0,
    logindata:{}
  },
  reducers: {
    setcounter: (state, action) => {
      state.counter = action.payload;
    },
    setcart: (state, action) => {
      state.cartindex = action.payload;
    },
    setsearchvalue:(state,action)=>{
        state.searchvalue=(action.payload).toUpperCase()
    },
    settoggle:(state,action)=>{
        state.toggle=action.payload
    }
    ,setfilterdata:(state,action)=>{
        state.filterdata=action.payload
    },
    setusername:(state,action)=>{
      state.username=action.payload
    },
    setpassword:(state,action)=>{
      state.password=action.payload
    },
    setsubtotal:(state,action)=>{
      state.subtotal=action.payload
    },
    settotalamout:(state,action)=>{
      state.totalamount=action.payload
    },
    setlogindata:(state,action)=>{
      state.logindata=action.payload
      console.log(state.logindata,'25')
    }
    // logindata contains the login credentials

  },
});
console.log(localStorage.getItem('cartvalue'))
export const { setcounter, setcart,setsearchvalue ,settoggle,setfilterdata,setusername,setpassword,setsubtotal,settotalamout,setlogindata} = commonSlice.actions;
export default commonSlice.reducer;
