import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import axios from 'axios';
import DeleteButton from './DeleteButton'

const ProductsList = (props) => {

  const [products, setProducts] = useState([]);

  // const deleteProduct = (productId) => {
  //   axios
  //     .delete(`http://localhost:8000/products/${productId}/delete`)
  //     .then((res) => {
  //       removeFromDom(productId);
  //     });
  // };

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((res) => setProducts(res.data));
  }, []);

  const removeFromDom = productId => {
      setProducts(products.filter(product => product._id != productId))
  }

  return (
    <div className="row mt-3">
      <div className="col-lg-2 text-center mx-auto mt-3">
        <h1>All Products: </h1>
        {products.map((product, idx) => {
          console.log(products);
          return (
            <p className="h5">
              <Link to={/products/ + product._id} key={idx}>{product.title}</Link>
              <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList
