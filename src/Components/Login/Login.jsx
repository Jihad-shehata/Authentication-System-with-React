import React, { useContext, useEffect, useState } from 'react';
import {useFormik} from "formik"
import * as Yup from 'yup'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../Contexts/AuthContext';
import Cookies from'js-cookie';
import img2 from '../../Assests/Login.gif'


export default function Login() {
  const Swal = require('sweetalert2')
  const[errorMeg,setErrorMeg]=useState('')
  const[isLoading,setIsLoading]=useState(false)
 const navigate= useNavigate()

 const {SetUserIsloggedIn,userIsLoggedIn}=useContext(authContext)
 

const validationSchema=Yup.object({
 
  username:Yup.string().required("User Name is required").min(3,"Min length must be 3 chracters").max(20,"Max length must be 20 characters"),
  password:Yup.string().required("Password is required").matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,"Password must contain special character, number more than 8 characters and less than 18 characters"),
  
})





  const {values,handleSubmit,errors,handleChange,touched,handleBlur,isValid}=useFormik({
    initialValues:{
      
      username:'',
      password:'',
      

    },
    onSubmit:async()=>{
      setErrorMeg('')
     try {
      setIsLoading(true)
      let {data}= await axios.post('https://dev.backend-api.goldady.com/user-api/auth/login',values)
      
      console.log(data.message.en)
      if(data.status==true)
      {
        SetUserIsloggedIn(true)
        // localStorage.setItem('token',data.data.accessToken)
        Cookies.set('token',data.data.accessToken)
        if(window.location.pathname=='/login')
        {
          navigate('/home')
        }
        else
        {
          navigate(window.location.pathname)
        }
        Cookies.set("data",values.username)
       
      }
      {data&&Swal.fire({
        title: "Login Successful!",
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
     } catch (error) {
      setErrorMeg(error.response.data.message.en)
      {error.response.data&&Swal.fire({
        title: "Login failed!",
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
    }
    setIsLoading(false)
  },
    validationSchema
  })

 
  return <>
    <div className="container">
      <div className="row">
        <div className="col-md-7">
    <div className="w-75 pt-5 m-auto my-5 login-bg">
      <h1 className='Goldady-'>Login here:</h1>
      <form onSubmit={handleSubmit}>
        
      
        <label htmlFor=" username" className='my-1'>User Name:</label>
        <input onChange={handleChange}  onBlur={handleBlur} value={values.username} type="text" className='form-control mb-3' id='username' name='username' />
        {errors.username&& touched.username&&<p className='alert alert-danger'>{errors.username}</p>}


        <label htmlFor="password" className='my-1'>Password:</label>
        <input onChange={handleChange}  onBlur={handleBlur} value={values.password} type="password" className='form-control mb-3' id='password' name='password' />
        {errors.password&& touched.password&&<p className='alert alert-danger'>{errors.password}</p>}



        

       
{errorMeg&&<div className="alert alert-danger">{errorMeg}</div>}

  {isLoading?
  <button disabled type='button' className='btn bg-main px-4 text-white ms-auto d-block'> <i className='fas fa-spin fa-spinner px-3'></i> </button>
:<button type='submit' disabled={!isValid||isLoading} className='btn bg-main px-3 fw-bolder ms-auto d-block text-white'>Login</button>
}
        

        
      </form>
    </div>
    </div>
<div className="col-md-5">
<img className='w-100 rounded-4 mt-5 ' src={img2} alt="" />
</div>


    </div>
    </div>
  </>
}

