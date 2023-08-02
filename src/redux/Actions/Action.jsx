import axios from "axios";
import { productUrl } from "../../Utiles/Constants/Url";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchdata1 = createAsyncThunk("home/fetchdata1", async(categoryparams) => {
  if (categoryparams === undefined) {
    try {
      const response = await axios.get(productUrl);
      return response.data;

    } catch (error) {
      throw new Error("there is an error fetching data");
    }
  } else {
    try {
      const response = await axios.get(`${productUrl}/category/${categoryparams}`);
      // console.log(response, "5");
      return response.data;
    } catch (error) {
      throw new Error("there is an error fetching data");
    }
  }
});

export const searchdata=createAsyncThunk('cart/searchdata',async()=>{
  let response=await axios.get(productUrl)
  // console.log(response.data,'1112')
  return response.data
}
// console.log(searchdata)
)