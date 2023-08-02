import zIndex from '@mui/material/styles/zIndex'
import React from 'react'
import { useNavigate,NavLink } from 'react-router-dom'
import allproducts from './assets/man-shopping-supermarket/all products.png'
import electronics from './assets/man-shopping-supermarket/electronics.png'
import jewellery from './assets/man-shopping-supermarket/jewellery.png'
import men from './assets/man-shopping-supermarket/men.png'
import women from './assets/man-shopping-supermarket/women.png'
function Category() {
  let navigate=useNavigate()

  let catergoryItems=[{image:allproducts, label:'All Products',route:'/'},{image:electronics, label:'Electronics',route:'/category/electronics'},{image:jewellery,label:'Jewellery',route:'/category/jewelery'},{image:men,label:`Men's Clothing`,route:`/category/men's clothing`},{image:women,label:`women's Clothing`,route:`/category/women's clothing`}]
  

  return (
    <div  style={{position:"sticky", top:'76px', zIndex:'1',height:'111px' ,boxShadow:'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' ,zIndex:'5', backgroundColor:'#F5F5F5' }}>
     
      
    <div className='container p-4 d-flex justify-content-center  align-items-center' >
      <div className='category '>
        <ul className='d-flex align-items-center '>
        
           
           {catergoryItems.map((item , index)=>{return(
          <li className='d-flex align-items-center flex-column' onClick={()=>navigate(item.route)} key={index}><div className='categorylistp'><img src={(item.image)} className='categoryimg'></img></div> {item.label}</li>
           )})}

         
        </ul>
      </div>
      
    </div>
    </div>
  )
}

export default Category