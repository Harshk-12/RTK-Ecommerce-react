import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setloginname,setloginpassword } from './redux/Slices/loginSlice';
import { setlogindata } from './redux/Slices/commonSlice';

function Login() {
  let dispatch=useDispatch()
  // let nameselector=useSelector(state=>state.ecomm.loginname)
  let {loginpassword,loginname}=useSelector(state=>state.login)
  let {logindata}=useSelector(state=>state.common)
  console.log(logindata,'e')
  const navigate = useNavigate('/');
  // let [loginname, setloginname] = useState('');
  // let [loginpassword, setloginpassword] = useState('');
   let signupdetails = JSON.parse(localStorage.getItem('signupdetails'));

  // //////////////LOGIN FUNCTION
  let loginfunc = (e) => {
    e.preventDefault();
    // detaills => "it contains the login credentials" after matching with signup data
    let details = signupdetails.find((item) => 
    {return (item.username === loginname && item.password === loginpassword)});
    // it is returning the username and and password from signupdetails 
    setlogindata(details)
     sessionStorage.setItem('Logindetail',JSON.stringify(details))
     console.log(details,'f')
     console.log(logindata,'logindata')
    if (details) {
      navigate('/');
    } else {
      alert('Invalid login credentials');
    }
    location.reload()
    
  };
  
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center   flex-column">
        <form className="signin d-flex justify-content-center align-items-center flex-column ">
          <div className="d-flex justify-content-center mb-4">
            <h2 className="m-auto fw-bold">Sign in</h2>
          </div>

              {/*EMAIL INPUT  */}
          <div className="form-group inputdiv">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control form-control-lg mb-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) =>dispatch(setloginname(e.target.value))}
            />
          </div>

          {/*  PASSWORD INPUT*/}
          <div className="form-group inputdiv">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control form-control-lg mb-3"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) =>dispatch(setloginpassword(e.target.value))}
            />
          </div>

         {/* Login btn */}
          <button
            type="submit"
            className="btn btn-primary ms-1 inputdiv "
            onClick={(e) => loginfunc(e)}
          >
            Sign in
          </button>
          {/*  */}
        </form>
        <p className='mt-1'>New Customer?</p>
        <div className='register text-center p-1 btn' onClick={()=>{navigate('/Signup')}}>Register</div>
      </div>

    </div>
  );
}

export default Login;
