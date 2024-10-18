import React, { useState } from "react";
import { Paginator } from "primereact/paginator";
import productList from "../Json/Productlist";
import { useNavigate } from "react-router-dom";

function Product() {
  const products = localStorage.getItem("products")
  const [searchTeam, setSearchTeam] = useState("");
  const [findeproduct, setFindPorduct] = useState(JSON.parse(products));
  console.log(findeproduct);
  
  const [currentPage, setCurrentPage] = useState(0);
  const itemsperpage = 6;

  const startIndex = currentPage * itemsperpage;
  const endindex = startIndex + itemsperpage;
  const currentproduct = findeproduct.slice(startIndex, endindex);

  const onPageChange = (event) => {
    setCurrentPage(event.page);
  };

  const handleSearch = (searchValue) => {
    
    
      const filteredproduct = findeproduct.filter((product) => {
        return product.title && product.title.toLowerCase().includes(searchValue.toLowerCase());
      });
      setFindPorduct(filteredproduct);
    setCurrentPage(0);
  };

  const navigate = useNavigate();

  const redirect = (product) => {
    navigate(`/Singleproduct/${product.id}`, { state: { product } });
  };

  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 justify-contend-center mt-5 mb- gallary-text">
            <h1 className="text-center ">Propular product</h1>
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
        <form
          className="d-flex"
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   handleSearch(e);
          // }}
        >
          <input
            className="form-control me-2 mb-5 "
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={searchTeam}
            onChange={(e) => {
              setSearchTeam(e.target.value);
              handleSearch(e.target.value);
            }}
          />
          {/* <button className="btn btn-outline-success" type="submit" onSubmit={handleSearch} >
            Search
          </button> */}
        </form>
        <div className="container">
          <div className="row justify-content-center">
            {currentproduct.length > 0 ? (
              currentproduct.map((product) => (
                <div
                  key={product.id}
                  className="col-md-4 mb-4 product"
                  onClick={() => redirect(product)}
                >
                  <div className="card w-400 ">
                    <img
                      src={product.photo}
                      className="card-img-top justify-content-center mx-5"
                      alt={product.title}
                      style={{
                        height: "200px",

                        // marginTop: "100px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.name }</h5>
                      <p className="card-text">
                        <strong>price:</strong>₹{product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>no product found</p>
            )}
          </div>
          <Paginator
            first={currentPage * itemsperpage}
            rows={itemsperpage}
            totalRecords={productList.length}
            onPageChange={onPageChange}
            template={{ layout: "PrevPageLink CurrentPageReport NextPageLink" }}
          />
        </div>
      </div>

      {/* <div className="container">
          <div className="row mb-5">
            {product.slice(0, 8).map((val, index) => {
              return (
                <div className="col-lg-3 d-flex" key={index}>
                  <div
                    className="card mt-5 border-none"
                    onClick={() => redirect(val)}
                  >
                    <img
                      src={val.imgsrc}
                      alt=""
                      className="mx-4 mt-2 my=4"
                    />
                    <strong className="text-center mt-2 mx-2">
                      {val.title}
                    </strong>
                    <br />
                    <span className="text-center mx-2">{val.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
         </div> */}
    </>
  );
}

export default Product;
