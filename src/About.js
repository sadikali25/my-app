import React from 'react'
import Navbar from '../component/Navbar'
import Fotter from '../component/Fotter'
import Customer from '../component/Customer'
import Offer from '../component/Offer'
import slider3 from "../Images/slider3.jpeg";
import aboutcard1 from '../Images/aboutcard1.jpeg'
function About() {
  return (
    <>
     <Navbar/>
     <div className="carousel-inner">
        <div className="carousel-item active about">
          <img src={slider3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-block w-10 ">
            <h1>
              About Us
            </h1>
          </div>
        </div>
      </div>


      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 aboutcard'>
              <img src={aboutcard1} alt=''/>
          </div>
          <div className='col-lg-6 aboutdetail'>
              <h1 className='mt-5'>Welcome to Vegefoods an eCommerce website</h1>
              <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
              <p>
              But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
              </p>
              <button className='btn btn-primary   '>Shop now</button>
          </div>
        </div>
      </div>
<hr/>
      <div className='container'>
        <div className='row mt-5 mb-5'>
        <div className="col-lg-6 justify-content-center">
          
          <h2>Subcribe to our Newsletter</h2>  
          <strong>Get e-mail updates about our latest shops and special offers</strong>
     </div>
     <div className="col-6 justify-content-center email-text ">
       <input type="text"placeholder="Enter The Email"/>
       <button className="btn">Subcribe</button>
     </div>
 </div>
        </div>
      
      <hr/>
     <Customer/>
     <Offer/>
     <hr/>
     <Fotter/>
    </>
  )
}

export default About
