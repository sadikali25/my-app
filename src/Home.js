import React from "react";
import Navbar from "../component/Navbar";
import slider3 from "../Images/slider3.jpeg";

import gallary1 from "../Images/gallary1.jpg";
import gallary2 from "../Images/gallary2.jpg";
import gallary3 from "../Images/gallary3.jpg";
import gallary4 from "../Images/gallary4.jpg";
import gallary5 from "../Images/gallary5.jpg";
import gallary6 from "../Images/gallary6.jpg";
import Product from "../component/Product";
import Customer from "../component/Customer";
import cologo2 from '../Images/cologo2.png';
import cologo3 from '../Images/cologo3.png';
import cologo4 from '../Images/cologo4.png';
import cologo5 from '../Images/cologo5.png';
import Fotter from "../component/Fotter";
import Offer from "../component/Offer";

// import banner from '../Images/banner1.jpeg'
function Home() {
  return (
    <div>
      <Navbar />
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slider3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-block w-10 ">
            <h1>
              Fresh, Organic, and Nutritious Explore the Latest in Plant-Based
              Living
            </h1>
          </div>
        </div>
      </div>

      {/*======================== card start================================================= */}
      <Offer/>
      {/*======================== card End================================================= */}
      {/*=============================== vagetable Gallary start============================== */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12 justify-contend-center mt-5 mb- gallary-text">
            <h1 className="text-center ">Our Gallary</h1>
            <p>
              <strong className="text-center">
                Vegetables are the cornerstone of a healthy and sustainable
                diet, offering a wealth of nutrients, fiber, and natural
                goodness. Whether you're adopting a plant-based lifestyle or
                simply incorporating more vegetables into your meals, vegetables
                play a crucial role in promoting wellness and vitality.
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div className="col-lg-4 d-flex">
            <div className="gallary mt-5">
              <img src={gallary1} alt="" className="mx-5" />
            </div>
          </div>
          <div className="col-lg-4 d-flex">
            <div className="gallary mt-5">
              <img src={gallary2} alt="" className="mx-5" />
            </div>
          </div>
          <div className="col-lg-4 d-flex">
            <div className="gallary mt-5">
              <img src={gallary3} alt="" className="mx-5" />
            </div>
          </div>
          <div className="col-lg-4 d-flex">
            <div className="gallary mt-5">
              <img src={gallary4} alt="" className="mx-5" />
            </div>
          </div>
          <div className="col-lg-4 d-flex">
            <div className="gallary mt-5">
              <img src={gallary5} alt="" className="mx-5" />
            </div>
          </div>
          <div className="col-lg-4 d-flex">
            <div className="gallary mt-5">
              <img src={gallary6} alt="" className="mx-5" />
            </div>
          </div>
        </div>
      </div>
      
      {/*=============================== vagetable Gallary End================================ */}
      {/* =============================product list start================================= */}
      <Product/>
      <hr></hr>
      {/* =============================product list End================================= */}

      {/*============================================= banner start========================================= */}
      {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner mt-5">
    <div class="carousel-item active">
    
      <img src={banner} class="d-block w-100" alt="..."/>
     
      <div className="container">
      <div className="row justify-content-center">
      <div className="col-lg-6 ">
      <div class="carousel-caption ">
      <span>Best Price For You</span>
      <h2>Deal of the day</h2>
      <p>
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
      </p>
      <h3>Spinach</h3>
      <span>$10 now $5 only</span>
      </div>
      </div>
      </div>
      </div>
    </div>
  </div>
</div> */}
{/* 
<section className="ftco-section img mt-5">
  <img src={banner} alt=""/>
  <div className="container ">
    <div className="row  justify-content-center">
      <div className="col-lg-6">
      <div className="">
         <span className="">Best Price For You</span>
         <h2>Deal of the day</h2>
         <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
         <h3>Spinach</h3>
         </div>
      </div>
    </div>
  </div>
</section> */}


      {/*============================================= banner End========================================= */}

{/*=================================================== customer start========================================== */}

<Customer/>
<hr></hr>
{/* ============================================customer End ===================================================*/}

{/*================================================ email demo start ======================*/}
   <div className="container">
   <div className="row cologo">
   <div className="col-lg-3 justify-content-center ">
       <img src={cologo2} alt=""></img>
    </div>
    <div className="col-lg-3 justify-content-center">
       <img src={cologo3} alt=""></img>
    </div>
    <div className="col-lg-3 justify-content-center">
       <img src={cologo4} alt=""></img>
    </div>
    <div className="col-lg-3 justify-content-center">
       <img src={cologo5} alt=""></img>
    </div>
   </div>
    <div className="row mb-4 mt-5">
    
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
   <hr></hr>
{/*========================================================== email demo end ====================================*/}

{/* =========================================================Fotter start =======================================*/}
<Fotter/> 
{/* =========================================================Fotter end =======================================*/}
    </div>
    
    
  );
}

export default Home;
