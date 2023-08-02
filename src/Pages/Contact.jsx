import React from 'react'
import { useState,useRef } from 'react'
import emailjs from '@emailjs/browser'

  const Contact = () => {

    const form = useRef();

    // const contactRef=useRef()
  
    const sendEmail = (e) => {
      e.preventDefault();
      // console.log(contact)
      
  
      emailjs.sendForm('service_4ts5neh', 'template_t6fpbfl', form.current, '9-yqyjz1LBlGUNz7S')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    };



  return (
    <div className=' formp d-flex justify-content-center mt-5 ' id='contact' >
        <form action="/" ref={form} type='submit' className='form  border border-success-subtle rounded-2 m-4 p-4 border-opacity-10 bg-light' style={{width:'30rem'}} onSubmit={sendEmail}>
          <h2 className='text-center mb-3'>Contact Us</h2>
            <label htmlFor="name" className='form-label fw-3'>Your Name </label>
            <input  name='user_name' type="text" id='name' className='form-control mb-3' placeholder='Your Name' />

            <label htmlFor="email" className='form-label'> Email Id </label>
            <input name='user_email' type="email" id='email'  placeholder='Email id' className='form-control mb-3'/>

            <label  htmlFor="contact" className='form-label'>Contact</label>
            <input name='user_phone' type="number" id='contact' placeholder='Phone no.' className='form-control mb-3' />

            <label htmlFor="message" className='form-label'>Message</label >
            <textarea name='message' id='message' rows={4} className='form-control mb-3'/>

            <button className='btn btn-primary w-100 align-self-center'>Submit</button>

        </form>  
    </div>

  )
}

export default Contact
