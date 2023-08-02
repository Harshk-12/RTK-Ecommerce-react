import React, { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { setcounter,setcart } from "./redux/Slices/commonSlice";
import { json } from "react-router-dom";

const apicontext = createContext(null);
const Appprovider = function Context({ children }) {

  let dispatch=useDispatch()
  let {counter,cartindex}=useSelector((state)=>state.common)

  // console.log(counter,'3')
  // let [cartindex, setcart] = useState(
  //   localStorage.getItem
  // ("cartvalue") == null
  //     ? []
  //     : JSON.parse(localStorage.getItem("cartvalue"))
  // );
  // let [counter, setcounter] = useState(
  //   JSON.parse(localStorage.getItem("cartvalue")).length
  // );
  
  // let[searchdata,setsearchdata]=useState([])

  function addcart(e, index) {
    // setcart([...cartindex, index]);
    dispatch(setcart([...cartindex, index]))
    dispatch(setcounter((counter += 1)));
    //  console.log(JSON.parse(localStorage.getItem('cartvalue')))
  }
  // console.log(cartindex,'cart');

  // useEffect(()=>{
  //   localStorage.setItem('cartvalue',JSON.stringify(cartindex))
  // },[cartindex])
  
  // console.log((localStorage.getItem("cartvalue")),'3')
// localStorage.setItem("cartvalue", []);


  useEffect(() => {
    localStorage.getItem('cartvalue')?localStorage.setItem("cartvalue",[]):localStorage.setItem("cartvalue", JSON.stringify(cartindex));
// localStorage.setItem("cartvalue", []);
  }, [cartindex]);

  // let logindetail = (sessionStorage.getItem("Logindetail"))?JSON.parse(sessionStorage.getItem("Logindetail")):[];
  // console.log(logindetail,'333')
  // {username: "harsh@gmail.com", password: "1"};
  // console.log(logindetail,'22');

  // useEffect(()=>{
  //   let searchfunc=async()=>{
  //     let data=await axios.get(`https://fakestoreapi.com/products`);
  //     setsearchdata(data.data)
  //   }
  //   searchfunc()
  // },[])
  // console.log(cartindex,'cartindex') 

  return (
    <>
      <apicontext.Provider
        value={{
          addcart,
          setcart,
          cartindex,
          counter,
          setcounter,
          
        }}
      >
        {children}
      </apicontext.Provider>
    </>
  );
};

let Globalcontext = () => {
  return useContext(apicontext);
};

export { apicontext, Globalcontext };
export default Appprovider;
