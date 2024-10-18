import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import slider3 from "../Images/slider3.jpeg";
// import product5 from "../Images/product5.jpg";
import remove from "../Images/remove.png";
import Fotter from "../component/Fotter";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(existingCart);

    setCartItems(existingCart);

  }, []);


useEffect(() => {
   localStorage.setItem("amount",JSON.stringify(cartItems));

   const totalAmount = 
   cartItems.reduce(
       (total, item) =>
         total + Number(item.price) * Number(item.quantity),
       0)- 3;

       localStorage.setItem("total Amount",totalAmount.toFixed(2));
}, [cartItems]);




  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // const navigate = useNavigate();

  // const redirect = (bill) =>{
  //   navigate(`/Paymant`,{state :{bill}})
  // }

  return (
    <>
      <Navbar />
      <div className="carousel-inner">
        <div className="carousel-item active about">
          <img src={slider3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-block w-10 ">
            <h1>MY CART</h1>
          </div>
        </div>
      </div>

      {/*=============================================== product list start======================================== */}
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-sm-6">
            <div className="cart-list">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th> </th>
                    <th>
                      <h3>Product name</h3>
                    </th>
                    <th>
                      <h3>Price</h3>
                    </th>
                    <th>
                      <h3>Quantity</h3>
                    </th>
                    <th>
                      <h3>Total</h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className="product-remove">
                          <img
                            src={remove}
                            alt="Remove"
                            onClick={() => handleRemoveItem(item.id)}
                            style={{ cursor: "pointer", width: "20px" }}
                          />
                        </td>
                        <td className="productimg">
                          <img
                            src={item.photo}
                            alt={item.title}
                            style={{ width: "200px" }}
                          />
                        </td>
                        <td>
                          <h4>{item.name}</h4>
                        </td>
                        <td>
                          <h4>₹{item.price}</h4>
                        </td>
                        <td>
                          <input
                            type="number"
                            value={item.quantity}
                            min={1}
                            className="form-control"
                            onChange={(e) => {
                              const updatedQuantity = parseInt(e.target.value);
                              const updatedItems = cartItems.map((cartItem) =>
                                cartItem.id === item.id
                                  ? { ...cartItem, quantity: updatedQuantity }
                                  : cartItem
                              );
                              setCartItems(updatedItems);
                              localStorage.setItem(
                                "cart",
                                JSON.stringify(updatedItems)
                              );
                            }}
                          />
                        </td>
                        <td>
                          <h4>₹{Number(item.price) * Number(item.quantity)}</h4>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">Your cart is empty</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="amount">
              <form className="" >
                <h4>Cart Totals</h4>
                <p className="d-flex">
                  <span>Subtotal</span>
                  <span>
                    ₹
                    {cartItems
                      .reduce(
                        (total, item) =>
                          total + Number(item.price) * Number(item.quantity),
                        0
                      )
                      .toFixed(2)}
                  </span>
                </p>
                <p className="d-flex">
                  <span>Delivery</span>
                  <span>₹0.00</span>{" "}
                </p>
                <p className="d-flex">
                  <span>Discount</span>
                  <span>₹3.00</span>{" "}
                </p>
                <hr />
                <p className="d-flex">
                  <span id="total">Total</span>
                  <span>
                    ₹
                    {(
                      cartItems.reduce(
                        (total, item) =>
                          total + Number(item.price) * Number(item.quantity),
                        0
                      ) - 3
                    ).toFixed(2)}
                  </span>
                </p>

                <button><NavLink to="/Payment" style={{textDecoration:"none",fontSize:"20px",color:"white"}}> Buy Now</NavLink></button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center mt-5 mb-5">
          {/* <div className="col-sm-12">
            <div className="amount">
              <form className="">
                <h4>Cart Totals</h4>
                <p className="d-flex">
                  <span>Subtotal</span>
                  <span>${cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0).toFixed(2)}</span>
                </p>
                  <p className="d-flex">
                    <span>Delivery</span>
                  <span>$0.00</span>{" "}
                </p>
                <p className="d-flex">
                  <span>Discount</span>
                  <span>$3.00</span>{" "}
                </p>
                <hr />
                <p className="d-flex">
                  <span>Total</span>
                  <span>$${(cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0) - 3).toFixed(2)}</span>
                </p>
                <button>Buy Now</button>
              </form>
            </div>
          </div> */}
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
        </div>
      </div>
      {/*=============================================== product list End======================================== */}
    </>
  );
}

export default Cart;
