import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import slider3 from "../Images/slider3.jpeg";
import Fotter from "../component/Fotter";
function Paymant() {

  
  return (
    <>
      <Navbar />
      <div className="carousel-inner">
        <div className="carousel-item active about">
          <img src={slider3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-block w-10 ">
            <h1>PAYMENT</h1>
          </div>
        </div>
      </div>


      <div className="container mt-5">
      <h2 className="">Billing Information</h2>
      <div className="row mt-5">
        <div className="col-sm-6">
          <form className="billing">
            <div className="form-group mb-3">
              <label>Customer Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="form-group mb-3">
              <label>Email Address</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="form-group mb-3">
              <label>Address</label>
              <input type="text" className="form-control" placeholder="Enter your address" />
            </div>
            <div className="form-group mb-3">
              <label>Phone Number</label>
              <input type="tel" className="form-control" placeholder="Enter your phone number" />
            </div>
          </form>
        </div>
        <div className="col-md-6 payment">
          <h4>Total Amount</h4>
          <ul className="list-group mb-3 Order-Summary">

          <li className="list-group-item d-flex justify-content-between" style={{font:"inherit",fontSize:"40px", fontFamily:"sans-serif"}}>
              {/* <span>Tomatoes (1kg)</span> */}
              <strong > ₹ {localStorage.getItem("total Amount") || []}</strong>
            </li>
        
          </ul>
          <button className=" btn-primary btn-block">Proceed to Payment</button>
        </div>
      </div>
    </div>
     

    <hr />
          <div className="container">
            <div className="row mb-4 mt-5">
              <div className="col-lg-6 justify-content-center">
                <h2>Subcribe to our Newsletter</h2>
                <strong>
                  Get e-mail updates about our latest shops and special offers
                </strong>
              </div>
              <div className="col-6 justify-content-center email-text ">
                <input type="text" placeholder="Enter The Email" />
                <button className="btn">Subcribe</button>
              </div>
            </div>
          </div>
          <Fotter />
    </>
  );
}

export default Paymant;
