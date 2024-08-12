import React, { useContext } from 'react';
import logo from "../../Assests/photo_2024-08-09_17-24-01.jpg"
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../Contexts/AuthContext';
import Cookies from'js-cookie';
export default function Navbar() {
  const navigate=useNavigate()
  const {SetUserIsloggedIn,userIsLoggedIn}=useContext(authContext)
  function logOut(){
    SetUserIsloggedIn(false)
    // localStorage.removeItem('token')
    Cookies.remove('token')
    navigate('/login')
  }

  return <>
    <nav className="navbar navbar-expand-lg navbar-bg">
      <div className="container nav-bg">
        <a className='navbar-brand'>
<div className="d-flex Goldady-barnd">

<h3 className='pt-2 Goldady-'>Goldady</h3>

</div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
        {userIsLoggedIn&&<ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
              <Link to={'home'} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={'My Projectes'} className="nav-link">My Projectes</Link>
            </li>
            <li className="nav-item">
              <Link to={'lastest Project'} className="nav-link">Lastest Project</Link>
            </li>
            <li className="nav-item">
              <Link to={'updates'} className="nav-link">Updates</Link>
            </li>
            <li className="nav-item">
              <Link to={'profile'} className="nav-link">Profile</Link>
            </li>
           
          </ul>}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
         {userIsLoggedIn ? <li className="nav-item">
              <span onClick={logOut} className="nav-link cursor-pointer bg-main text-white  fw-bolder btn">Logout</span>
            </li>:<>
              <li className="nav-item">
                <Link to={'login'} className=" cursor-pointer btn bg-main nav-link fs-6 text-white fw-bolder me-2" >Login</Link>
              </li>
              <li className="nav-item">
                
                <Link to ={'register'} className=" cursor-pointer btn bg-main nav-link text-white  fw-bolder">Register</Link>
              </li>
            </>}
          
           
            
            
          </ul>
        </div>
      </div>
    </nav>
  </>
}
