import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Globalcontext } from "./Context";
import PersonIcon from "@mui/icons-material/Person";
import Category from './Category'
import LogoutIcon from '@mui/icons-material/Logout';
import alibaba from './assets/man-shopping-supermarket/alibaba.png'
// import {AiOutlineSearch} from 'react-icons'
import { AiOutlineSearch } from "react-icons/ai";
import { searchdata } from "./redux/Actions/Action";
import { useDispatch,useSelector } from "react-redux";
import { setsearchvalue,settoggle,setfilterdata,setlogindata } from "./redux/Slices/commonSlice";

function Navbar() {
  let dispatch=useDispatch()
useEffect(()=>{
dispatch(searchdata())
},[])

let {data2}=useSelector(state=>state.home)
let{searchvalue,toggle,filterdata,logindata}=useSelector(state=>state.common)

// console.log(logindata,'data')
  // let[filterdata,setfilterdata]=useState([])
  const navigate = useNavigate();
  let { counter, logindetail} = Globalcontext();
  // const [toggle,settoggle]=useState(false)
  // const[searchvalue,setsearchValue]=useState('')
  // const[inputvalue,setinputvalue]=useState('')
  // logindetail?window.location.reload():''

  let loginuseremail = sessionStorage.getItem("Logindetail") ? JSON.parse(sessionStorage.getItem("Logindetail")).username : "";
  // console.log(loginuseremail,'lg')
  let emailindex = loginuseremail?.indexOf("@");

  let loginusername = logindata
    ? loginuseremail?.slice(0, emailindex)
    : "sigin";

  let navbarList = [
    { to: "/category/", label: "Home" },
    { to: "/About", label: "About Us" },
    { to: "/Contact", label: "Contact" },
  ];

  function togglehandler(){
  dispatch(settoggle(!toggle))
  }
  function logout(){
    sessionStorage.removeItem('Logindetail')
    navigate('/Signin')
    dispatch(settoggle(false))
    location.reload()  
  }
 
    let searchitem=(value)=>{
      dispatch(setsearchvalue(value))
      // let inputvalue=(value.toUpperCase())
   
      console.log(value,'000')
      dispatch(setfilterdata(data2.filter(item=>{ return  searchvalue?item.title.toUpperCase().includes(searchvalue):''})))
        // setfilterdata(mydata,'2')
        console.log(filterdata,'f')
      }

      let searchFunc=(listvalue,listid)=>{
        navigate(`/singlepage/${listid}`)
        location.reload()
     console.log(listvalue)
    //  dispatch(setsearchvalue(listvalue))
     
      }

  return (
    <>
      <nav className="navbar navbar-expand-lg  customnavbar d-flex align-items-center">
        <div className="container-fluid ">
          <div className=" navlist me-5" style={{ fontSize: "1.4em",cursor:'pointer', height:'60px', width:"200px" }} onClick={()=>{navigate('/')}} >
          <img src={alibaba} alt="logo" style={{width:'100%',height:'100%', objectFit:'contain'}} />
          </div>


          {/* Search button */}
          <div className=" d-flex align-items-center justify-content-center mb-3"> 
          <div className=" search-box  ">
            <label htmlFor="search"></label>
            <input type="search" className="form-control search-box-input  " placeholder="Search for Products..." value={searchvalue} onChange={(e)=>searchitem((e.target.value))} />
          </div>
          <button className="mt-4 pt-1 rounded-end px-3 ms-1 pb-2 btn btn-secondary" ><AiOutlineSearch/>  </button>
          </div>
          {/*  */}
          {/* display searched Items */}
            

          <div className={searchvalue?"searchedItems":'d-none'}  >
            <ul style={{marginTop:'-4rem'}}>
            {filterdata.map(item=>{ 
              return(<>
                < li 
                key={item.id}
                onClick={()=>{return searchFunc(item.title, item.id)}} style={{cursor:'pointer'}}>{item.title}</li> 
              </>
                )
            })}

            </ul>
           
          </div>
          
          {/*  */}

          <div className="collapse navbar-collapse d-flex ms-5 navlistitems" id="navbarNav">
            <ul className="navbar-nav  ">
             
              {navbarList.map((item, index) => {
                return (
                  <li className="nav-item " key={index}>
                    <Link
                      className="nav-link text-dark navlist "
                      aria-current="page"
                      to={item.to}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

{/* account and cart */}
            <div className=" nav-link d-flex align-items-center loginusername flex-column  position-relative">
              <p className="text-dark">Hello,{loginusername}</p>
              
                <PersonIcon className="nav-link navlist personicon" onMouseEnter={togglehandler}/>
           
            {/*  logout div*/}
            <div className={toggle?'displayaccount':'hideaccount'}>
            <ul className="d-flex justify-content-center flex-column " onMouseLeave={togglehandler}>
              <li>Account</li>
              <li>setting</li>
              <li onClick={logout}><span><LogoutIcon className="pe-1"/></span>Logout</li>
            </ul>
            </div>
            </div>
            
              {/*  */}

            <div className="ms-auto">
              <div className="counter " style={{color:'#f55742'}}>{counter}</div>
              <ShoppingCartIcon
                className="me-3 w-100 carticon"
                onClick={() => {
                  navigate("/Cart");
                }}
              ></ShoppingCartIcon>
            </div>
          </div>
        </div>
      </nav>
      <Category />

      {/* <Outlet></Outlet> */}
    </>
  );
}

export default Navbar;

