import React, { useState } from  'react';

const UserForm = (props) => {
    const { inputs, setInputs } = props;

    const onChange = (e) => {
        setInputs({
            // bring in the entire collection of state
            // spreads dictionary out into key, value pairs to preserve values, so we do not accidentally overwrite other values
          ...inputs,
          [e.target.name]: e.target.value,
        });
    };

    return (
        <form>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input onChange={onChange} type="text" name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input onChange={onChange} type="text" name="lastName" />
        </div>
        <div>
          <label htmlFor="email">Email Address: </label>
          <input onChange={onChange} type="text" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input onChange={onChange} type="text" name="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input onChange={onChange} type="text" name="confirmPassword" />
        </div>
      </form>
    );
}

export default UserForm;
