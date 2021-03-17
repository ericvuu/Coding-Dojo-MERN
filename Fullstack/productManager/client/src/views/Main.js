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


  return (
    <div>
      <ProductForm />
      <hr />
      {loaded && <ProductsList products={products} />}
    </div>
  );
};

export default Main;
