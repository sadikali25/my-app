import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Admin() {
  const [product, setProduct] = useState([]);
  console.log(product);

  


  const [itemProduct, setItemProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editmode, setEditMode] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  useEffect(() => {
    const products = localStorage.getItem("products");

    if (products) {
      setProduct(JSON.parse(products));
    }
  }, []);

  const hendleEditProduct = (product) => {
    setSelectedProduct(product);
    setImagePreview(product.image);
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct({ ...selectedProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setSelectedProduct({ ...selectedProduct, photo: reader.result });
        // localStorage.setItem("products", JSON.stringify(reader));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateProduct = () => {
    const updatedProducts = product.map((item) =>
      item.id === selectedProduct.id ? selectedProduct : item
    );
    console.log(updatedProducts);

    setProduct(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setEditMode(false);
    setSelectedProduct(null);
    setImagePreview("");
  };

  const handleRemoveItemProduct = (id) => {
    console.log(id);
    const aa = localStorage.getItem("products")
    const bb = JSON.parse(aa)
    console.log(bb);
    
    const updatedCart = bb.filter((item) => item.id !== id);
    setItemProduct(updatedCart);
    localStorage.setItem("products", JSON.stringify(updatedCart));
    
   
  };  

  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate("/add_product");
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <h1>Admin Panal</h1>
          </div>
        </div>
      </div>

      <table className=" table table-dark table-striped">
        <thead className="justyfy-content-center">
          <tr className="text-center">
            <th>Id</th>
            <th>Product-Images</th>
            <th>ProductName</th>
            <th>Product-Description</th>
            <th>Product price</th>

            <th>
              <button
                onClick={handleAddProduct}
                className="btn-primary"
                style={{
                  backgroundColor: "#afff33",
                  width: "100px",
                  height: "50px",
                  borderRadius: "20px",
                }}
              >
                Add
              </button>
            </th>
          </tr>
        </thead>

        {product.length > 0 ? (
          <tbody className="text-center">
            {product.map((item) => (
              <tr key={item.id}>
                <th>{item.id}</th>

                <td className="productimg">
                  <img
                    src={item.photo}
                    alt={item.title}
                    style={{ width: "200px" }}
                  />
                </td>
                <td>{item.name}</td>
                <td>
                  <textarea placeholder="Description" className="form-control">
                    {item.description}
                  </textarea>
                </td>
                <td>{item.price}</td>

                <td>
                  <button
                    className=" btn-primary"
                    style={{
                      backgroundColor: "#33ddff",
                      width: "100px",
                      height: "50px",
                      borderRadius: "20px",
                    }}
                    onClick={() => hendleEditProduct(item)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className=" btn-danger"
                    
                    onClick={() => handleRemoveItemProduct(item.id)}
                    style={{
                      backgroundColor: "red",
                      width: "100px",
                      height: "50px",
                      borderRadius: "20px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <p>No product found in localStorage.</p>
        )}
      </table>
      {editmode && selectedProduct && (
        <div>
          <h3>Edit Product</h3>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={selectedProduct.name}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={selectedProduct.description}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={selectedProduct.price}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div>
            <label>Product Image:</label>
            <input
              type="file"
              name="photo"
              onChange={handleImageChange}
              className="form-control"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{ width: "100px", height: "100px", marginTop: "10px" }}
              />
            )}
          </div>
          <button
            onClick={handleUpdateProduct}
            className="btn-primary"
            style={{
              backgroundColor: "#33ff77",
              width: "100px",
              height: "50px",
              borderRadius: "20px",
              marginTop: "20px",
            }}
          >
            Update
          </button>
        </div>
      )}
    </>
  );
}

export default Admin;
