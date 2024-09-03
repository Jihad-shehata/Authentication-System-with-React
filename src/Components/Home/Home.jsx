import React from 'react';
import UserDetails from './UserDetails';
import Cookies from'js-cookie';
import gif from '../../Assests/login-animate.gif'
import ExampleComponent from './UserDetails';

export default function Home() {
  
  return <>
   
    <div className="container">
      <div className="row">
        <div className="col-md-7 mt-5">
          <h3 className='mt-2 mb-3 font-color'>Welcome to FutureMinds AI
          - Your Gateway to  prepar you for the future of technology." {Cookies.get('data')} !</h3>

          <ExampleComponent/>
        </div>
        <div className="col-md-5 ">
          <img className='w-100 rounded-4 mt-5 ' src={gif} alt="" />
        </div>
      </div>
    </div>
    
  </>
}
