import React from 'react'

function Footer() {
    return (
        <footer className="footer  py-5 ">
            <div className="container">
              <h6 className='text-center fw-semibold'>FutureMinds AI
              empowers learners with cutting-edge skills in artificial intelligence</h6>
              <div className=" me-auto  mb-lg-0 d-flex justify-content-center">
            <div className="icon2">
              <a href="" target='blank'> <i className='fab mx-3 fa-linkedin'></i></a>
            
            </div>
            <div className="icon3">
            <a href="" target='_blank'> <i className='fab mx-3 fa-facebook'></i></a>
           
            </div>
           <div className="icon4"> 
              <a href=''  target='_blank'> <i className='fab mx-3 fa-instagram'></i></a>
           
            </div>
           
          </div>
            </div>
        </footer>
    )
}

export default Footer