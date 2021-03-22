import React from 'react'
import { Link } from "@reach/router";

const NoAuthor = () => {
  return (
    <div className="container text-center mt-5">
        <p>
          We're sorry, but we could not find the author you are looking for.
          Would you like to add this author to our database?
        </p>
        <Link to="/new">Create Author</Link>
    </div>
  );
}

export default NoAuthor;
