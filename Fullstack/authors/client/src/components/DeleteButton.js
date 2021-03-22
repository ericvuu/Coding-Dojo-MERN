import React from 'react'
import axios from 'axios';

const DeleteButton = (props) => {

  const { authorId, successCallback } = props;

  const deleteProduct = (e) => {
      axios
        .delete(`http://localhost:8000/authors/${authorId}/`)
        .then((res) => {
        successCallback();
        });
    };

  return (
    <div>
      <>
      <button onClick={deleteProduct} className="btn btn-danger ml-5"> Delete</button>
    </>
    </div>
  )
}

export default DeleteButton
