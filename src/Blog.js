import React from "react";
import Navbar from "../component/Navbar";
import slider3 from "../Images/slider3.jpeg";
import blog1 from "../Images/blog1.jpeg";
import Fotter from "../component/Fotter";
function Blog() {
  return (
    <>
      <Navbar />
      <div className="carousel-inner">
        <div className="carousel-item active about">
          <img src={slider3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-block w-10 ">
            <h1>BLOG</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 blog mt-5">
            <img src={blog1} alt="" />
          </div>
          <div className="col-lg-3 justify-content-center mt-5">
            <span>July 20, 2019 Admin </span>
            <h3>
              Even the all-powerful Pointing has no control about the blind
              texts
            </h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="col-lg-4 mt-5 mx-5 labal">
            <h4>Categories</h4>
            <hr />
            <p>Vegetables</p>
            <hr />
            <p>Fruits</p>
            <hr />
            <p>Juice</p>
            <hr />
            <p>Dries</p>
            <hr />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 blog mt-5">
            <img src={blog1} alt="" />
          </div>
          <div className="col-lg-3 justify-content-center mt-5">
            <span>July 20, 2019 Admin </span>
            <h3>
              Even the all-powerful Pointing has no control about the blind
              texts
            </h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          <div className="col-lg-2 blog2 mt-5">
            <img src={blog1} alt="" />
          </div>
          <div className="col-lg-3 justify-content-center mt-5">
            <h3>
              Even the all-powerful Pointing has no control about the blind
              texts
            </h3>
            <span>July 20, 2019 Admin </span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 blog mt-5">
            <img src={blog1} alt="" />
          </div>
          <div className="col-lg-3 justify-content-center mt-5">
            <span>July 20, 2019 Admin </span>
            <h3>
              Even the all-powerful Pointing has no control about the blind
              texts
            </h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="col-lg-2 blog2 mt-5">
            <img src={blog1} alt="" />
          </div>
          <div className="col-lg-3 justify-content-center mt-5">
            <h3>
              Even the all-powerful Pointing has no control about the blind
              texts
            </h3>
            <span>July 20, 2019 Admin </span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 blog mt-5">
            <img src={blog1} alt="" />
          </div>
          <div className="col-lg-3 justify-content-center mt-5">
            <span>July 20, 2019 Admin </span>
            <h3>
              Even the all-powerful Pointing has no control about the blind
              texts
            </h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="col-lg-2 blog2 mt-5">
            <img src={blog1} alt="" />
          </div>
          <div className="col-lg-3 justify-content-center mt-5">
            <h3>
              Even the all-powerful Pointing has no control about the blind
              texts
            </h3>
            <span>July 20, 2019 Admin </span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-3 blog mt-5">
            <img src={blog1} alt="" />
          </div>
          <div className="col-lg-3 justify-content-center mt-5">
            <span>July 20, 2019 Admin </span>
            <h3>
              Even the all-powerful Pointing has no control about the blind
              texts
            </h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="col-lg-6 blog2 mt-5 justify-content-center">
            <h4 className="text-center">Paragraph</h4>
            <p className="text-center mx-4 my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              itaque, autem necessitatibus voluptate quod mollitia delectus aut,
              sunt placeat nam vero culpa sapiente consectetur similique,
              inventore eos fugit cupiditate numquam!
            </p>
          </div>
        </div>
      </div>
      <Fotter/> 
    </>
  );
}

export default Blog;
