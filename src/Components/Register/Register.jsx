import React, { useState } from 'react';
import {useFormik} from "formik"
import * as Yup from 'yup'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import Cookies from'js-cookie';
import img from '../../Assests/log_2.gif'



export default function Register() {
  const Swal = require('sweetalert2')
  const[errorMeg,setErrorMeg]=useState('')
  const[isLoading,setIsLoading]=useState(false)
 

 const navigate= useNavigate()
const validationSchema=Yup.object({
  first_name:Yup.string().required("First Name is required").min(3,"Min length must be 3 chracters").max(20,"Max length must be 20 characters"),
  last_name:Yup.string().required("Last Name is required").min(3,"Min length must be 3 chracters").max(20,"Max length must be 20 characters"),
  phone:Yup.string().required("Phone is required").matches(/^01[0125][0-9]{8}$/,"Enter Valid Eygption Phone Number"),
  email:Yup.string().required("Email is required").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,"Enter Valid Email"),
  username:Yup.string().required("User Name is required").min(3,"Min length must be 3 chracters").max(20,"Max length must be 20 characters"),
  password:Yup.string().required("Password is required").matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,"Password must contain special character, number more than 8 characters and less than 18 characters"),
  password_confirmation:Yup.string().required("Re-Password is required").oneOf([Yup.ref('password')])
})





  const {values,handleSubmit,errors,handleChange,touched,handleBlur,isValid}=useFormik({
    initialValues:{
      first_name:'',
      last_name:'',
      phone:'',
      email:'',
      username:'',
      password:'',
      password_confirmation:''

    },
    onSubmit:async()=>{
      // setErrorMeg('')
     try {
      setIsLoading(true)
      let {data}= await axios.post('https://dev.backend-api.goldady.com/user-api/auth/register',values)
      
      console.log(data)
      {data&&Swal.fire({
        title: "Registration Successful!",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });}
      if(data.status==true)
      {
        navigate('/login')
        Cookies.set("data",values.username)
        Cookies.set("emailData",values.email)
        Cookies.set("firstNameData",values.first_name)
        Cookies.set("lastNameData",values.last_name)

        
       
      }
      
     } catch (error) {
      Object.keys(error.response.data.message).forEach((element)=>
      {
        {error.response.data&&Swal.fire({
          title:error.response.data.message[element][0].en ,
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
        
       }
      })
     
    }
    setIsLoading(false)
  },
    validationSchema
  })

  return <>
    <div className="container ">
    <div className='row'>
      <div className="col-md-7">
    <div className="w-50 m-auto  ">
      <h1 className='pt-3 Goldady-'>Register here:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first_name" className='my-1 '>First Name:</label>
        <input onChange={handleChange} onBlur={handleBlur} value={values.first_name} type="text" className='form-control mb-3' id='first_name' name='first_name' />
        {errors.first_name&& touched.first_name&&<p className='alert alert-danger'>{errors.first_name}</p>}


        <label htmlFor="last_name" className='my-1'>Last Name:</label>
        <input onChange={handleChange}  onBlur={handleBlur} value={values.last_name} type="text" className='form-control mb-3' id='last_name' name='last_name' />
        {errors.last_name&& touched.last_name&&<p className='alert alert-danger'>{errors.last_name}</p>}


        <label htmlFor="phone" className='my-1'>phone:</label>
        <input onChange={handleChange}  onBlur={handleBlur} value={values.phone} type="tel" className='form-control mb-3' id='phone' name='phone' />
        {errors.phone&& touched.phone&&<p className='alert alert-danger'>{errors.phone}</p>}


        <label htmlFor="email" className='my-1'>Email:</label>
        <input onChange={handleChange}  onBlur={handleBlur} value={values.email} type="email" className='form-control mb-3' id='email' name='email' />
        {errors.email&& touched.email&&<p className='alert alert-danger'>{errors.email}</p>}



        <label htmlFor=" username" className='my-1'>User Name:</label>
        <input onChange={handleChange}  onBlur={handleBlur} value={values.username} type="text" className='form-control mb-3' id='username' name='username' />
        {errors.username&& touched.username&&<p className='alert alert-danger'>{errors.username}</p>}


        <label htmlFor="password" className='my-1'>Password:</label>
        <input onChange={handleChange}  onBlur={handleBlur} value={values.password} type="password" className='form-control mb-3' id='password' name='password' />
        {errors.password&& touched.password&&<p className='alert alert-danger'>{errors.password}</p>}



        <label htmlFor="password_confirmation" className='my-1'>Re-Password:</label>
        <input onChange={handleChange} value={values.password_confirmation} type="password" className='form-control mb-3' id='password_confirmation' name='password_confirmation' />
        {errors.password_confirmation&& touched.password_confirmation&&<p className='alert alert-danger'>{errors.password_confirmation}</p>}

       
{/* {errorMeg&&<div className="alert alert-danger">{errorMeg}</div>} */}

  {isLoading?
  <button disabled type='button' className='btn bg-main px-4 text-white ms-auto d-block'> <i className='fas fa-spin fa-spinner px-3'></i> </button>
:<button type='submit' disabled={!isValid||isLoading} className='btn bg-main px-3  mt-3 m-auto d-block mb-2 text-white fw-bolder'>Register</button>

}
        

        
      </form>
    </div>
    </div>
    <div className="col-md-5 mt-5 ">
  <img className='w-100 rounded-4 mt-5 ' src={img} alt="" />
  
    </div>



    </div>
  
    </div>
    
  </>
}
