import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import DeleteButton from "../components/DeleteButton";

const ViewAuthor = (props) => {

  const [author, setAuthor] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/authors/" + props.id)
      .then((res) => setAuthor(res.data))
      .catch((err) => navigate("/error"));
  }, [props.id]);

  return (
    <div className="container mt-5 text-center">
      <h3 className="display-3">{author.name}</h3>
      <div className="d-inline-flex mt-3">
        <Link to={`/edit/${author._id}`} className="btn btn-primary mr-1"> Update</Link>
        <DeleteButton authorId={author._id} successCallback={() => navigate('/')}/>
      </div>
    </div>
  )
}

export default ViewAuthor
