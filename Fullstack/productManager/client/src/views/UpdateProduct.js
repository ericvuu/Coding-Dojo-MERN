import React, { useEffect, useState } from "react";
import axios from "axios";

const UpdateProduct = (props) => {

  const { id } = props;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8000/products/' + id)
      .then(res => {
              setTitle(res.data.title);
              setPrice(res.data.price);
              setDescription(res.data.description)
            })
  }, [id])

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/products/${id}/edit`, {
        title,
        price,
        description
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="row mt-5">
      <div className="col-lg-2 mx-auto">
        <h2>Update a Product</h2>
        <form className="mt-3" onSubmit={updateProduct}>
          <p className="form-group">
            <label>Title</label>
            <br />
            <input
              className="form-control"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </p>
          <p className="form-group">
            <label>Price</label>
            <br />
            <input
              className="form-control"
              type="text"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </p>
          <p className="form-group">
            <label>Description</label>
            <br />
            <input
              className="form-control"
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </p>
          <p className="text-center">
            <button className="btn btn-primary">Update</button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
