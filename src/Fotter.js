import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaHeart, FaLinkedinIn } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
function Fotter() {
  return (
    <>
      <div className="container-fulid fotter">
        <div className="container">
          <div className="row gx-3">
            <div className="col-lg-3 mb-4 mt-5 ">
              <h4>Vegefoods </h4>
              <p className="mt-4 mt-5">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <h4 className="mt-5">Connnect</h4>
              <div className="i-con" id="lab_social_icon_footer">
                <LuInstagram id="social-it" />

                <BsWhatsapp id="social-ws" />

                <FaLinkedinIn id="social-ld" />

                <FaFacebookF id="social-fb" />
              </div>
            </div>

            <div className="col-sm-3 mb-4 mt-5" id="lab_project_footer">
              <h4 className="text-center">Menu</h4>
              <div className="mt-4 mb-4 project-title">
                <h5>shop</h5>
                <h5>About</h5>
                <h5>Journal</h5>
                <h5>Contact Us</h5>
                
              </div>
            </div>
            <div className="col-sm-3 mb-4 mt-5" id="lab_project_footer">
              <h4 className="text-center">Help</h4>
              <div className="mt-4 mb-4 project-title">
                <h5>Shipping Information</h5>
                <h5>Returns & Exchange</h5>
                <h5>Terms & Conditions</h5>
                <h5>Privacy Policy</h5>
                
              </div>
            </div>
            
            <div className="col-md-3 mb-4 mt-5">
              <h4 className="text-center">Contact</h4>
              <div className="mt-4 mb-4 project-title">
                <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                <h5>+1(123)-456-7890</h5>
                <h5>(91+)9879590440</h5>
                <h5>sadikalivora@gmail.com</h5>
              </div>
            </div>
            <p className="text-center copy-right">
              Copyright ©2024 All rights reserved | This template is made with <FaHeart className="text-danger" /> by
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Fotter
