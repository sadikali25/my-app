import React from "react";
import customer1 from "../Images/timg-1.jpg";
import customer2 from "../Images/timg-2.jpg";
import customer3 from "../Images/timg-3.jpg";

function Customer() {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-md-12 mt-5 md-5 justify-content-center">
            <div className="text-center offer-list">
              <h1>Our satisfied customer says</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in.
                
              </p>
            </div>
          </div>
          <div className="col-md-4 mt-4 mb-5 ">
            <div className="techers justify-content-center cutomer-review">
              <img src={customer1}></img>

              <p className="mt-5 mb-5 text-center">
                Far far away, behind the word mountains,
                <br /> far from the countries Vokalia and Consonantia,
                <br /> there live the blind texts.
              </p>
              <h3 className="text-center mt-3">SADIKALI KHORAJIYA</h3>
              <h6 className="text-center">PROJECT MENEGER</h6>
            </div>
          </div>
          <div className="col-md-4 mt-4 mb-5 ">
            <div className="techers justify-content-center cutomer-review">
              <img src={customer2}></img>

              <p className="mt-5 mb-5 text-center">
                Far far away, behind the word mountains,
                <br /> far from the countries Vokalia and Consonantia,
                <br /> there live the blind texts.
              </p>
              <h3 className="text-center mt-3">SADIKALI KHORAJIYA</h3>
              <h6 className="text-center">PROJECT MENEGER</h6>
            </div>
          </div>
          <div className="col-md-4 mt-4 mb-5 ">
            <div className="techers justify-content-center cutomer-review">
              <img src={customer3}></img>

              <p className="mt-5 mb-5 text-center">
                Far far away, behind the word mountains,
                <br /> far from the countries Vokalia and Consonantia,
                <br /> there live the blind texts.
              </p>
              <h3 className="text-center mt-3">SADIKALI KHORAJIYA</h3>
              <h6 className="text-center">PROJECT MENEGER</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customer;
