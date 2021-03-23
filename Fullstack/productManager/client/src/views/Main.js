import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductForm from "../components/ProductForm";
import ProductsList from "../components/ProductsList";

const Main = () => {

  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/products/").then((res) => {
      setProducts(res.data);
      setLoaded(true);
    });
  }, [products]);

  const removeFromDom = (productId) => {
    setProducts(products.filter((product) => product._id != productId));
  };

  const createProduct = product => {
    axios
      .post("http://localhost:8000/products/", product)
      .then(
        setProducts(product => [...products, product]),
        setLoaded(false)
      )
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div>
          <h2>Product Manager</h2>
          <ProductForm
            onSubmitProp={createProduct}
            initialTitle=""
            initialPrice=""
            initialDescription=""
          />
        </div>
      </div>
      <hr />
      {loaded && (
        <ProductsList products={products} removeFromDom={removeFromDom} />
      )}
    </div>
  );
};

export default Main;
