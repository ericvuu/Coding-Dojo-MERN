import React from 'react'
import AuthorForm from '../components/AuthorForm'
import axios from "axios";
import { navigate } from "@reach/router";

const NewAuthor = () => {

  const createAuthor = (author) => {
    axios
      .post("http://localhost:8000/new", author)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container text-center">
      <h1>Favorite Authors</h1>
      <AuthorForm onSubmitProp={createAuthor} initialName=""/>
    </div>
  );
}

export default NewAuthor
