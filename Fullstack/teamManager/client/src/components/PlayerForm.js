import React, { useState } from "react";

const PlayerForm = (props) => {

  const { initialName, onSubmitProp } = props;

  const [name, setName] = useState(initialName);
  const [position, setPosition] = useState(initialName);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ name, position });
  };

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
        <p className="form-group">
          <input
            className="form-control"
            type="text"
            onChange={(e) => setPosition(e.target.value)}
            value={position}
          />
        </p>
        <p className="text-center">
          <button className="btn btn-primary ml-3" disabled={ name.length < 2 }>Submit</button>
        </p>
      </form>
    </div>
  );
};

export default PlayerForm;
