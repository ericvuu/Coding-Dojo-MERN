import React from 'react'
import { Link } from "@reach/router";
import axios from 'axios';

const ProductsList = ({ products, removeFromDom }) => {

  const deleteProduct = (productId) => {
    axios
      .delete(`http://localhost:8000/products/${productId}/delete`)
      .then((res) => {
        removeFromDom(productId);
      });
  };

  return (
    <div className="row mt-3">
      <div className="col-lg-2 text-center mx-auto mt-3">
        <h1>All Products: </h1>
        {products.map((product, idx) => {
          console.log(products);
          return (
            <p className="h5">
              <Link to={/products/ + product._id} key={idx}>{product.title}</Link>
              <button onClick={(e) => { deleteProduct(product._id) }} className="btn btn-danger ml-5"> Delete</button>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList
