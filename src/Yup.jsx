// import {string} from "yup";
import * as Yup from 'yup';

// console.log(Yup)
export const Signupschema= Yup.object({
    Name:Yup.string().min(3).max(30).required("Please Enter the Name"),
    Email:Yup.string().email().required('Please Enter the  Email Id'),
    PhoneNumber:Yup.string().min(10).max(10).required('Please Enter the Phone no.'),
    Message:Yup.string().min(8).max(50).required('Please enter the message')

})

export const Signupschema2=Yup.object({
    Email:Yup.string().email().required('Please Enter the  Email Id'),
    Password:Yup.string().min(4).max(12).required('Please Enter the password'),
    ConfirmPassword:Yup.string().oneOf([Yup.ref('Password'),null],'Password must match').required('Please Enter the Password')
})
// export { Signupschema}
