import React from 'react'
import { Link } from "@reach/router";

const ProductsList = ({products}) => {

  return (
    <div className="row mt-3">
      <div className="col-lg-2 text-center mx-auto mt-3">
        <h1>All Products: </h1>
        {products.map((product, idx) => {
          console.log(products)
          return (
            <p className="h5">
              <Link to={/products/ + product._id} key={idx}>
                {product.title}
              </Link>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsList
