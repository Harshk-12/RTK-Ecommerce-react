import React, { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import axios from 'axios'

const apicontext = createContext(null);
const Appprovider = function Context({ children }) {
  let [cartindex, setcart] = useState(
    localStorage.getItem("cartvalue") == null
      ? []
      : JSON.parse(localStorage.getItem("cartvalue"))
  );
  let [counter, setcounter] = useState(
    JSON.parse(localStorage.getItem("cartvalue")).length
  );
  
  let[searchdata,setsearchdata]=useState([])

  function addcart(e, index) {
    setcart([...cartindex, index]);
    // console.log(cartindex);
    setcounter((counter += 1));
    //  console.log(JSON.parse(localStorage.getItem('cartvalue')))
  }

  useEffect(() => {
    localStorage.setItem("cartvalue", JSON.stringify(cartindex));
  }, [cartindex]);

  let logindetail = JSON.parse(sessionStorage.getItem("Logindetail"));
  console.log(logindetail);

  useEffect(()=>{
    let searchfunc=async()=>{
      let data=await axios.get(`https://fakestoreapi.com/products`);
      setsearchdata(data.data)
    }
    searchfunc()
  },[])

  return (
    <>
      <apicontext.Provider
        value={{
          addcart,
          setcart,
          cartindex,
          counter,
          setcounter,
          logindetail,
          searchdata
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
