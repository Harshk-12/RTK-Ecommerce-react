import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setusername, setpassword } from "./redux/Slices/commonSlice";
import { useFormik } from "formik";
import { Signupschema2 } from "./Yup";

function Signup() {
  let initialvalue = {
    Email: "",
    Password: "",
    ConfirmPassword: "",
  };

  let dispatch = useDispatch();
  let { username, password } = useSelector(state => {
    return state.common;
  });
  console.log(username, "user");
  const navigate = useNavigate();
  // let [username,setusername]=useState('')
  // let [useremail,setuseremail]=useState('')
  // let [password,setpassword]=useState('')
  let [storagevalue, setstoragevalue] = useState(localStorage.getItem("signupdetails") == null ? [] : JSON.parse(localStorage.getItem("signupdetails")));
  // let [cartindex,setcart]=useState(localStorage.getItem('cartvalue')==null?[]:JSON.parse(localStorage.getItem('cartvalue')))

  console.log(storagevalue);

  function submit(e) {
    e.preventDefault();
    setstoragevalue([...storagevalue, { username: username, password: password }]);
    navigate("/Signin");
    // console.log(storagevalue)
  }

  useEffect(() => {
    localStorage.setItem("signupdetails", JSON.stringify(storagevalue));
  }, [storagevalue]);

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: initialvalue,
    validationSchema: Signupschema2,
    onSubmit: (values, action) => {
      setstoragevalue([...storagevalue, { username: username, password: password }]);
      // action.resetForm();
      navigate("/Signin");
      // console.log(handleBlur)
    },
  });
  console.log(errors);
  console.log(touched);

  console.log(values);
  return (
    <div>
      <div className='container d-flex justify-content-center'>
        <form className='signup d-flex justify-content-center align-items-center flex-column '>
          {/*  */}
          <div className='d-flex justify-content-center mb-4'>
            <h2 className='m-auto fw-bold'>Signup</h2>
          </div>

          {/*  */}
          <div className='form-group inputdiv'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Email address
            </label>
            <input
              name='Email'
              type='email'
              className='form-control form-control-lg mb-3'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter Email'
              value={values.Email}
              onChange={e => {
                handleChange(e);
                dispatch(setusername(e.target.value));
              }}
              onBlur={handleBlur}
            />
            {errors.Email && touched.Email && <p className='error-msg'>{errors.Email}</p>}
          </div>
          {/*  */}

          {/*  */}
          <div className='form-group inputdiv'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              Password
            </label>
            <input
              name='Password'
              type='password'
              className='form-control form-control-lg mb-3'
              id='exampleInputPassword1'
              placeholder='Password'
              value={values.Password}
              onChange={e => {
                handleChange(e);
                dispatch(setpassword(e.target.value));
              }}
              onBlur={handleBlur}
            />
            {errors.Password && touched.Password && <p className='error-msg'>{errors.Password}</p>}
          </div>
          {/*  */}

          {/* confirm-password */}
          <div className='form-group inputdiv'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              Confirm Password
            </label>
            <input
              name='ConfirmPassword'
              type='password'
              className='form-control form-control-lg mb-3'
              placeholder='Retype Password'
              value={values.ConfirmPassword}
              onChange={e => {
                handleChange(e);
                onBlur = { handleBlur };
              }}
            />
            {errors.ConfirmPassword && touched.ConfirmPassword && <p className='error-msg'>{errors.ConfirmPassword}</p>}
          </div>
          {/*  */}

          <button
            type='submit'
            className='btn btn-primary ms-1 inputdiv'
            onClick={e => {
              handleSubmit(e);
            }}>
            Signup
          </button>

          <div className='mt-2'>
            <p>
              Already have an account?
              <Link to='/Signin' style={{ "text-decoration": "none" }}>
                Sign in
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
