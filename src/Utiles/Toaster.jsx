import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


    
// Toaster
let notify=()=>{
    toast.success("Product added to cart",{
      position: toast.POSITION.BOTTOM_RIGHT
    })
  }
   let notify2=()=>{
    toast.info('Product already added to Cart', {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  }
  // 
 
  export {notify, notify2}
// export default Toaster