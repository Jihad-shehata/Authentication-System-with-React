import React from 'react';
import Cookies from'js-cookie';
import profileImg from '../../Assests/profile img.png'
export default function Profile() {

  return <>
   <div className="container pb-3">
   <div className="row pt-5 pb-5">
    <div className="col-md-8 pt-2 Goldady-">
      <h2 >  User Name : {Cookies.get('data')}</h2>
      <h2>  First Name : {Cookies.get('firstNameData')}</h2>
      <h2>  Last Name : {Cookies.get('lastNameData')}</h2>
      <h2> E-mail : {Cookies.get('emailData')}</h2>
      <button type='submit' className='btn bg-main px-3  mt-5 d-block mb-2 text-white fw-bolder'>Add More Details</button>
    </div>
    <div className="col-md-4 pb-5">
      <img src={profileImg} alt="" className='w-75 rounded-circle' />
    </div>

   </div>
   </div>
  </>
}
