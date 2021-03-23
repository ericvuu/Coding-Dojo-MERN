import React, { useState } from "react";
import { Link } from "@reach/router";

const AuthorForm = (props) => {

  const {initialName, onSubmitProp} = props;

  const [name, setName] = useState(initialName);
  const [number_of_books, setNumber_of_books] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({
      name,
      number_of_books,
    });
  }

  return (
    <div className="col-5 mx-auto mt-5">
      <form className="mt-3" onSubmit={onSubmitHandler}>
        <p className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            className="form-control"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </p>
        <p className="form-group">
          <label htmlFor="number_of_books">Number of Books: </label>
          <input
            className="form-control"
            type="text"
            onChange={(e) => setNumber_of_books(e.target.value)}
            value={number_of_books}
          />
        </p>
        <p className="text-center">
          <Link to="/" className="btn btn-success">
            Cancel
          </Link>
          <button className="btn btn-primary ml-3">Submit</button>
        </p>
      </form>
    </div>
  );
}

export default AuthorForm;
