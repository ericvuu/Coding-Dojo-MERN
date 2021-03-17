import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link, navigate } from "@reach/router";


const ViewProduct = (props) => {

  const [product, setProduct] = useState({})

  useEffect(() => {
    axios
      .get("http://localhost:8000/products/" + props.id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [props.id]);

  const deleteProduct = (productId) => {
    axios
      .delete(`http://localhost:8000/products/${productId}/delete`)
      .then(() => navigate(`/products/`));
  }

  return (
    <div className="container mt-5 text-center">
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <Link to={`/products/${product._id}/edit`} className="btn btn-primary mr-1"> Update Product</Link>
      <button onClick={(e) => { deleteProduct(product._id) }} className="btn btn-danger ml-5"> Delete</button>
    </div>
  );
}

export default ViewProduct
