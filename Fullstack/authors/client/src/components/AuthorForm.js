import React, { useState } from "react";
import { Link } from "@reach/router";

const AuthorForm = (props) => {

  const {initialName, onSubmitProp} = props;

  const [name, setName] = useState(initialName);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({name})
  }

  return (
    <div className="col-5 mx-auto mt-5">
      <form className="mt-3" onSubmit={onSubmitHandler}>
        <p className="form-group">
          <input
            className="form-control"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </p>
        <p className="text-center">
          <Link to="/"className="btn btn-success">Cancel</Link>
          <button className="btn btn-primary ml-3">Submit</button>
        </p>
      </form>
    </div>
  );
}

export default AuthorForm;
