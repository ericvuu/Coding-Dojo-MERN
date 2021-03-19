import React, {useState} from 'react'
import AuthorForm from '../components/AuthorForm'
import axios from "axios";
import { navigate, Link } from "@reach/router";

const NewAuthor = () => {

  const [errors, setErrors] = useState([]);

  const createAuthor = (author) => {
    axios
      .post("http://localhost:8000/new", author)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        const errorResponse = error.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  return (
    <div className="container text-center">
      <div className="container text-left">
        <Link to="/">Home</Link>
      </div>
      <h1>Favorite Authors</h1>
      <h5>Add a new author:</h5>
      {errors.map((error, index) =>( <p className="text-danger" key={index}>{error}</p>))}
      <AuthorForm onSubmitProp={createAuthor} initialName="" />
    </div>
  );
}

export default NewAuthor
