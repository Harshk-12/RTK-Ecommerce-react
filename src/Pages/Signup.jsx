import React, { useEffect, useState } from "react";
// import Login from "./Login";
import { useNavigate, Link } from "react-router-dom";



function Signup() { 
  const navigate=useNavigate()
  let [username,setusername]=useState('')
  // let [useremail,setuseremail]=useState('')
  let [password,setpassword]=useState('')
  let [storagevalue,setstoragevalue]=useState(localStorage.getItem('signupdetails')==null?[]:JSON.parse(localStorage.getItem('signupdetails')));
  // let [cartindex,setcart]=useState(localStorage.getItem('cartvalue')==null?[]:JSON.parse(localStorage.getItem('cartvalue')))

  
console.log(storagevalue) 
function submit(e){
  e.preventDefault()  
  console.log(storagevalue )
  console.log(username)
  if(username==='' || password===''){
    alert('Please Enter the Details')
  }
  else{
    setstoragevalue([...storagevalue,{ "username": username, 'password': password }])
    navigate('/Signin') 
    console.log(storagevalue)
  }
}

useEffect(()=>{
  localStorage.setItem('signupdetails', JSON.stringify(storagevalue));
},[storagevalue])

console.log(storagevalue)

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <form className="signup d-flex justify-content-center align-items-center flex-column ">
            {/*  */}
          <div className="d-flex justify-content-center mb-4">
            <h2 className="m-auto fw-bold">Signup</h2>
          </div>

          {/* <div className="form-group inputdiv" >
            <label htmlFor="exampleInputName" className="form-label" >Name</label>
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              id="exampleInputName"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              value={username}
            onChange={(e)=>setusername(e.target.value)}/>
          </div> */}

          <div className="form-group inputdiv" >
            <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
            <input
              type="email"
              className="form-control form-control-lg mb-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
              value={username}
            onChange={(e)=>setusername(e.target.value)}/>
          </div>
          <div className="form-group inputdiv">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              className="form-control form-control-lg mb-3"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e)=>{setpassword(e.target.value)}}
            />
          </div>
          <button type="submit" className="btn btn-primary ms-1 inputdiv " onClick={(e)=>submit(e)}>
            Signup
          </button>
          <div className="mt-2">
            <p>Already have an account?<Link to='/Signin' style={{'text-decoration' : 'none'}}>Sign in</Link> </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
