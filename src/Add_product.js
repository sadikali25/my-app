import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
function Add_product() {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
    photo: null,
    quantity: "",
  });

  const [formerrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    
  };

 

  const handlePhotoChange = (e) => {
    setProduct({
      ...product,
      photo: e.target.files[0], // Store the uploaded photo file
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate(product);
    setFormErrors(error);
    setIsSubmit(true);

    if (Object.keys(error).length > 0) {
      return;
    }

    const products = JSON.parse(localStorage.getItem("products")) || [];

    const newproduct = {
      id: products.length + 1,
      name: product.name,
      price: product.price,
      description: product.description,
      photo: product.photo ? URL.createObjectURL(product.photo) : null,
      quantity: product.quantity,
    };

    products.push(newproduct);
    localStorage.setItem("products", JSON.stringify(products));
    toast("Product added to local storage:", newproduct);

    
    // setProduct({ id: "", name: "", price: "", description: "", photo: null });
  };

  useEffect(() => {
    if (Object.keys(formerrors).length === 0 && isSubmit) {
      console.log("Form is valid, proceed with submission.");
    }
  }, [formerrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Enter the product name";
    }
    if (!values.price) {
      errors.price = "Enter the product price";
    }
    if (!values.description) {
      errors.description = "Enter the product description";
    }
    if (!values.photo) {
      errors.photo = "Enter the product photo";
    }
    return errors;
  };
  return (
    <>
      <div className="product-form">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
            {formerrors.name && (
              <p className="error" style={{ color: "red" }}>
                {formerrors.name}
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
            />
            {formerrors.price && (
              <p className="error" style={{ color: "red" }}>
                {formerrors.price}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              required
            ></textarea>
            {formerrors.description && (
              <p className="error" style={{ color: "red" }}>
                {formerrors.description}
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="photo">Product Photo</label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handlePhotoChange}
              required
            />
            {formerrors.photo && (
              <p className="error" style={{ color: "red" }}>
                {formerrors.photo}
              </p>
            )}
          </div>
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            Add Product

          </button>
          <ToastContainer />
        </form>
      </div>
    </>
  );
}

export default Add_product;
