import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate('/');
  let [loginname, setloginname] = useState('');
  let [loginpassword, setloginpassword] = useState('');
   let signupdetails = JSON.parse(localStorage.getItem('signupdetails'));
  console.log(loginpassword);

  let loginfunc = (e) => {
    e.preventDefault();
    const details = signupdetails.find((item) => 
    {return (item.username === loginname && item.password === loginpassword)});
    console.log(details,'111');

     sessionStorage.setItem('Logindetail',JSON.stringify(details))

    if (details !== undefined) {
      navigate('/category/');
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
              onChange={(e) => setloginname(e.target.value)}
            />
          </div>
          <div className="form-group inputdiv">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control form-control-lg mb-3"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => setloginpassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary ms-1 inputdiv "
            onClick={(e) => loginfunc(e)}
          >
            Sign in
          </button>
        </form>
        <p className='mt-1'>New Customer?</p>
        <div className='register text-center p-1 btn' onClick={()=>{navigate('/Signup')}}>Register</div>
      </div>

    </div>
  );
}

export default Login;
