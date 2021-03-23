import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link, navigate } from "@reach/router";
import DeleteButton from '../components/DeleteButton';


const ViewProduct = (props) => {

  const [product, setProduct] = useState({})

  useEffect(() => {
    axios
      .get("http://localhost:8000/products/" + props.id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [props.id]);

  return (
    <div className="container mt-5 text-center">
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <Link to={`/products/${product._id}/edit`} className="btn btn-primary mr-1"> Update Product</Link>
      <DeleteButton productId={product._id} successCallback={() => navigate('/products')}/>
    </div>
  );
}

export default ViewProduct
