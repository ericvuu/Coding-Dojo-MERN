import React, { useState } from "react";
import axios from "axios";

const ProductForm = (props) => {

  const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;

  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   axios.post('http://localhost:8000/products/', {
  //     title,
  //     price,
  //     description
  //   })
  //   .then((result) => {
  //     setTitle("");
  //     setPrice("");
  //     setDescription("");
  //   })
  //   .catch((error) => console.log(error));

  // }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({title, price, description});
  }

  return (
    <>
        <form className="mt-3" onSubmit={onSubmitHandler}>
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
            <button className="btn btn-primary">Submit</button>
          </p>
        </form>
    </>
  );
}

export default ProductForm;
