import React from 'react'
import card1 from "../Images/card1.jpg";
import card2 from "../Images/card2.png";
import card3 from "../Images/card3.png";
import card4 from "../Images/card4.png";
function Offer() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 d-flex">
            <div className="card mt-5 border-none">
              <img src={card1} alt="" className="mx-" />
              <strong className="text-center mt-5">Free Shipping</strong>
              <span className="text-center">On order over $100</span>
            </div>
          </div>
          <div className="col-lg-3 d-flex">
            <div className="card mt-5 border-none">
              <img src={card2} alt="" className="mx-4 mt-2" />
              <strong className="text-center  mt-2">Always Fresh</strong>
              <span className="text-center">Product well package</span>
            </div>
          </div>
          <div className="col-lg-3 d-flex">
            <div className="card mt-5 border-none">
              <img src={card3} alt="" className="mx-5 mt-2" />
              <strong className="text-center mt-4">Superior Quality</strong>
              <span className="text-center">Quality Products</span>
            </div>
          </div>
          <div className="col-lg-3 d-flex">
            <div className="card mt-5 border-none">
              <img src={card4} alt="" className="mx-5 mt-2" />
              <strong className="text-center mt-4">Support</strong>
              <span className="text-center">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Offer
