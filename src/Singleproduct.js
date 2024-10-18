import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";

import slider3 from "../Images/slider3.jpeg";
import { ToastContainer, toast } from 'react-toastify';
import Product from "../component/Product";
import Fotter from "../component/Fotter";
import { useLocation, useParams } from "react-router-dom";
import productList from "../Json/Productlist";

//  import productList from "../Json/Productlist";

function Singleproduct() {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.product || null);
  //const product,setProduct] = useState (location.state?.product);
  const [quantity, setQuantity] = useState(1);
  //const navigate = useNavigate();

  //const Cart = JSON.parse(localStorage.getItem("products")) || [];
  // useEffect(() => {
  //   if (!product) {
  //     const foundProduct = Cart.find((p) => p.id === parseInt(id));
  //     console.log("product Detail", foundProduct);
  //     setProduct(foundProduct);
  //   }
  // }, [id]);

  const submitcard = () => {
    if (!product) {
      toast("no product avalible for the card");
      return;
    }

    const productToCard = {
      id: product.id,
      title: product.title,
      price: product.price,
      photo: product.photo,
      quantity: quantity,
    };

    console.log(productToCard);
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
     
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === productToCard.id
    );

    if (existingProductIndex > -1) {
      existingCart[existingProductIndex].quantity += quantity;
    } else {
      existingCart.push(productToCard);
      console.log(productToCard);
      
    }
   console.log(existingCart);
   
    localStorage.setItem("cart", JSON.stringify(existingCart));
    toast("product add to cart in localstorage");

    //navigate(`/card/${product.id}`, { state: { product } });
  };

  const handleIncrement = () => setQuantity((prev) => Math.min(prev + 1, 100));
  const handleDecrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  if (!product) {
    return <p>No product details available. Go back to the product list.</p>;
  }
  return (
    <>
      <div>
        <Navbar />
        <div className="container-fuild">
          <div className="carousel-inner">
            <div className="carousel-item active about">
              <img src={slider3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-block w-10 ">
                <h1>PRODUCT SINGLE</h1>
              </div>
            </div>
          </div>
        </div>
        {/* =================================single product start==================================== */}
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-sm-6 justify-content-center">
              <div className="productsingle">
                <img src={product.photo || "placeholder-image.jpg"} alt="" />
              </div>
            </div>
            <div className="col-lg-6 justify-content-center">
              <div className="">
                <h1 className="mt-5">{product.name || "Unknown Product"}</h1>
                <h2 className="mt-5">{product.price || "N/A"}</h2>
                <p className="mt-5">
                  {product.description || "No description available"}
                </p>
                <div class="form-group d-flex">
                  <div class="select-wrap">
                    <div class="icon">
                      <span class="ion-ios-arrow-down color:#4ea0ab"></span>
                    </div>
                    <select name="" id="" class="form-control">
                      <option value="">Small</option>
                      <option value="">Medium</option>
                      <option value="">Large</option>
                      <option value="">Extra Large</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="incre-dicre">
                <button className="mt-5 mb-3 mx-4" onClick={handleDecrement}>
                  -{" "}
                </button>
                <input
                  type="text"
                  value={quantity}
                  min="1"
                  max="100"
                  className="text center"
                />
                <button className="mt-5 mx-4" onClick={handleIncrement}>
                  +
                </button>
              </div>
              <strong>600 kg available</strong>

              <div className="cart-btn">
                <button onClick={submitcard}>Add to Cart</button>
                <ToastContainer />
              </div>
            </div>
            {/*============================================= Our Product  start=============================== */}
            <div>
              <Product />
              <hr />
            </div>
            {/*======================== Our Product  End =============================================*/}
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
          </div>
        </div>
      </div>

      {/* =================================single product end==================================== */}
    </>
  );
}

export default Singleproduct;
