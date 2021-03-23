import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import ProductForm from "../components/ProductForm";

const UpdateProduct = (props) => {

  const { id } = props;
  const [loaded, setLoaded] = useState(false);
  const [product, setProduct] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8000/products/' + id)
      .then(res => {
        setProduct(res.data)
        setLoaded(true)
      })
  }, [id])

  const updateProduct = (product) => {
    axios
      .put(`http://localhost:8000/products/${id}/edit`, product)
      .then((res) => console.log(res))
      .then(() => navigate(`/products/`));
  };

  return (
    <div className="row mt-5">
      <div className="col-lg-2 mx-auto">
        <h2>Update a Product</h2>

        {loaded && (<ProductForm onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description}/>)}

      </div>
    </div>
  );
}

export default UpdateProduct;
