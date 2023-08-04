import React from "react";
import { Signupschema } from "./Yup";
import { useFormik } from "formik";
// path is absolute only for functional components so relative path is used

const Contact = () => {
  const firstvalues = {
    Name: "",
    Email: "",
    PhoneNumber: "",
    Message: "",
  };
  // console.log(Signupschema)

  const { values, handleChange, handleBlur, handleSubmit, errors ,touched} = useFormik({
    initialValues: firstvalues,
    validationSchema: Signupschema,
    onSubmit: (values, action) => {
      action.resetForm();
      // console.log(handleBlur)
    },
  });
  console.log(errors);

  return (
    <div className=' formp d-flex justify-content-center mt-5 ' id='contact'>
      <form className='form  border border-success-subtle rounded-2 m-4 p-4 border-opacity-10 bg-light' style={{ width: "30rem" }} onSubmit={handleSubmit}>
        <h2 className='text-center mb-3'>Contact Us</h2>
        <label htmlFor='name' className='form-label fw-3'>
          Your Name
        </label>
        <input name='Name' type='text' id='name' className='form-control mb-3' placeholder='Your Name' value={values.Name} onChange={handleChange} onBlur={handleBlur} />
        {(touched.Name && errors.Name)?
        <p className="error-msg">{errors.Name}</p>
        :null
          }
        <label htmlFor='email' className='form-label'>
          Email Id
        </label>
        <input
          name='Email'
          type='email'
          id='email'
          placeholder='Email id'
          className='form-control mb-3'
          value={values.Email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
         {(touched.Email && errors.Email)?
        <p className="error-msg">{errors.Email}</p>
        :null
          }

        <label htmlFor='contact' className='form-label'>
          Contact
        </label>
        <input
          name='PhoneNumber'
          type='number'
          id='contact'
          placeholder='Phone no.'
          className='form-control mb-3'
          value={values.PhoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
        />
         {(touched.PhoneNumber && errors.PhoneNumber)?
        <p className="error-msg">{errors.PhoneNumber}</p>
        :null
          }

        <label htmlFor='Message' className='form-label'>
          Message
        </label>
        <textarea name='Message' id='Message' rows={4} className='form-control mb-3' value={values.Message} onChange={handleChange} onBlur={handleBlur} />
          {(touched.Message && errors.Message)?
        <p className="error-msg">{errors.Message}</p>
        :null
          }

        <button type='submit' className='btn btn-primary w-100 align-self-center'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
