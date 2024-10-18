import React, { useState } from "react";
import Navbar from "../component/Navbar";
import slider3 from "../Images/slider3.jpeg";
import Product from "../component/Product";
import Fotter from "../component/Fotter";
import productList from "../Json/Productlist";
function Shop() {
    return (
    <>
      <Navbar />
      <div className="carousel-inner">
        <div className="carousel-item active about">
          <img src={slider3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-block w-10 ">
            <h1>SHOP</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mb-4 mt-5">
          <div className="col-lg-8 justify-content-center"></div>
          <div className="col-4 justify-content-center email-text "></div>
        </div>
      </div>
      {/*============================================= Our Product  start=============================== */}
      <Product />
      
      <hr />
      {/*======================== Our Product  End =============================================*/}
      <div className="container-fluid">
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

export default Shop;
