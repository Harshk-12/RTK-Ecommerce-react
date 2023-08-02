import React,{useState, useEffect,CSSProperties} from 'react'
import { useParams } from 'react-router-dom'
import { Globalcontext } from './Context'
import axios from 'axios'
import Spinner from './Utiles/Spinner'
// import PropagateLoader from "react-spinners/PropagateLoader";



function Singlepage() {
  const [singledata,setsingledata]=useState({})
  let {addcart,cartindex}=Globalcontext()
  let[isloading,setloading]=useState(true)
  let {id}=useParams()

useEffect(()=>{
 async function fetchdata(){
  //  <div className="loading"><ReactLoading type="bubbles" color="#000" /></div>
   
   let fetchdata=await axios.get(`https://fakestoreapi.com/products/${id}`)
   console.log(fetchdata.data)
   setsingledata(fetchdata.data)
   setloading(false)
}
fetchdata() 
},[])
// console.log(singledata)

//spinner style 
// let override={
//   color:'red',
//   marginLeft:'48%',
//   marginTop:'15%'

// }



  return (
    
<div className='container mt-5' >

<Spinner isloading={isloading} marginleft='40%' margintop='10%'/>
{/* <PropagateLoader color={'orange'} loading={loader} size={30} aria-label="Loading Spinner"  cssOverride={override} data-testid="loader"/> */}

    <div className={isloading?"d-none":'card p-2 m-auto d-flex align-items-center'} style={{width: '29rem' }}>

        <div style={{width:'22rem' ,height:'13rem'}}>
             <img src={singledata.image} className="card-img-top" alt="image" style={{objectFit:'contain',width: '100%' ,height:"100%"}}/>
        </div>

      <div className="card-body mt-1 d-flex flex-column" >
        <h5 className="card-title">{singledata.title}</h5>
        <p className="card-text text-left">{singledata.description}</p>
        <p >{`Price - $${singledata.price}`}</p>
{
  // singledata.id===cartindex.id
   cartindex.find((item)=>(item.id===singledata.id))===undefined?
  <button className='btn btn-primary w-50 mx-auto' onClick={(e)=>{
    addcart(e, {
      image: singledata.image,
      id: singledata.id,
      price: singledata.price,
      quantity: '1',
      title: singledata.title,
    })
   }}>Add to cart</button>
      : <button className=' btn disabled w-50 mx-auto'>Added to cart</button>
}
       
      </div>
  
</div>
</div>

  )
}

export default Singlepage